// Your exact InfiniteMenu implementation in TypeScript
interface VertexInterface {
    position: [number, number, number];
    index: number;
}

interface FaceInterface {
    vertices: VertexInterface[];
    centroid: [number, number, number];
}

interface Camera {
    position: [number, number, number];
    target: [number, number, number];
    up: [number, number, number];
}

interface DiscInstance {
    position: [number, number, number];
    scale: number;
    rotation: number;
    textureIndex: number;
}

interface ToolData {
    id: string;
    name: string;
    description: string;
    category?: string;
    url?: string;
}

// Your exact vertex shader
const discVertShaderSource = `#version 300 es
in vec3 position;
in vec2 uv;
in vec3 instancePosition;
in float instanceScale;
in float instanceRotation;
in float instanceTextureIndex;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform float time;

out vec2 vUv;
out vec3 vWorldPosition;
out float vAlpha;
out float vTextureIndex;

void main() {
    vUv = uv;
    vTextureIndex = instanceTextureIndex;
    
    vec3 pos = position * instanceScale;
    
    float c = cos(instanceRotation);
    float s = sin(instanceRotation);
    mat3 rotMatrix = mat3(
        c, 0.0, s,
        0.0, 1.0, 0.0,
        -s, 0.0, c
    );
    
    pos = rotMatrix * pos;
    pos += instancePosition;
    
    pos.y += sin(time + instancePosition.x * 2.0 + instancePosition.z * 1.5) * 0.1;
    
    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
    vWorldPosition = worldPosition.xyz;
    
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
    
    float dist = length(vWorldPosition);
    vAlpha = smoothstep(15.0, 5.0, dist);
}`;

// Your exact fragment shader
const discFragShaderSource = `#version 300 es
precision highp float;

in vec2 vUv;
in vec3 vWorldPosition;
in float vAlpha;
in float vTextureIndex;

uniform sampler2D textureAtlas;
uniform float time;
uniform vec3 cameraPosition;

out vec4 fragColor;

void main() {
    vec2 atlasUv = vUv;
    int textureIndex = int(vTextureIndex);
    
    if (textureIndex == 1) {
        atlasUv.x = vUv.x * 0.5 + 0.5;
    } else if (textureIndex == 2) {
        atlasUv.y = vUv.y * 0.5 + 0.5;
    } else if (textureIndex == 3) {
        atlasUv.x = vUv.x * 0.5 + 0.5;
        atlasUv.y = vUv.y * 0.5 + 0.5;
    }
    
    // Create procedural texture since we don't have actual textures loaded
    vec2 center = vUv - 0.5;
    float dist = length(center);
    float rings = sin(dist * 20.0 + time) * 0.5 + 0.5;
    
    vec3 color = vec3(0.2 + rings * 0.3, 0.6, 1.0 - rings * 0.2);
    
    float glow = smoothstep(0.5, 0.3, dist);
    
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 normal = vec3(0.0, 0.0, 1.0);
    float fresnel = pow(1.0 - abs(dot(viewDir, normal)), 2.0);
    
    color += glow * 0.2;
    color += fresnel * 0.1;
    
    fragColor = vec4(color, vAlpha);
}`;

// gl-matrix functions (simplified version for our needs)
class Mat4 {
    static create(): Float32Array {
        return new Float32Array(16);
    }
    
    static perspective(out: Float32Array, fovy: number, aspect: number, near: number, far: number): Float32Array {
        const f = 1.0 / Math.tan(fovy / 2);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = (far + near) / (near - far);
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = (2 * far * near) / (near - far);
        out[15] = 0;
        return out;
    }
    
    static lookAt(out: Float32Array, eye: [number, number, number], center: [number, number, number], up: [number, number, number]): Float32Array {
        const x0 = eye[0], x1 = eye[1], x2 = eye[2];
        const upx = up[0], upy = up[1], upz = up[2];
        const centerx = center[0], centery = center[1], centerz = center[2];
        
        if (Math.abs(x0 - centerx) < 0.000001 &&
            Math.abs(x1 - centery) < 0.000001 &&
            Math.abs(x2 - centerz) < 0.000001) {
            return Mat4.identity(out);
        }
        
        let z0 = x0 - centerx;
        let z1 = x1 - centery;
        let z2 = x2 - centerz;
        
        let len = 1 / Math.hypot(z0, z1, z2);
        z0 *= len;
        z1 *= len;
        z2 *= len;
        
        let x0_1 = upy * z2 - upz * z1;
        let x1_1 = upz * z0 - upx * z2;
        let x2_1 = upx * z1 - upy * z0;
        len = Math.hypot(x0_1, x1_1, x2_1);
        if (!len) {
            x0_1 = 0;
            x1_1 = 0;
            x2_1 = 0;
        } else {
            len = 1 / len;
            x0_1 *= len;
            x1_1 *= len;
            x2_1 *= len;
        }
        
        let y0 = z1 * x2_1 - z2 * x1_1;
        let y1 = z2 * x0_1 - z0 * x2_1;
        let y2 = z0 * x1_1 - z1 * x0_1;
        
        out[0] = x0_1;
        out[1] = y0;
        out[2] = z0;
        out[3] = 0;
        out[4] = x1_1;
        out[5] = y1;
        out[6] = z1;
        out[7] = 0;
        out[8] = x2_1;
        out[9] = y2;
        out[10] = z2;
        out[11] = 0;
        out[12] = -(x0_1 * x0 + x1_1 * x1 + x2_1 * x2);
        out[13] = -(y0 * x0 + y1 * x1 + y2 * x2);
        out[14] = -(z0 * x0 + z1 * x1 + z2 * x2);
        out[15] = 1;
        
        return out;
    }
    
    static identity(out: Float32Array): Float32Array {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
}

// Your exact Face class
class Face implements FaceInterface {
    vertices: VertexInterface[];
    centroid: [number, number, number];
    
    constructor(vertices: VertexInterface[]) {
        this.vertices = vertices;
        this.centroid = this.calculateCentroid();
    }
    
    calculateCentroid(): [number, number, number] {
        let x = 0, y = 0, z = 0;
        for (const vertex of this.vertices) {
            x += vertex.position[0];
            y += vertex.position[1];
            z += vertex.position[2];
        }
        return [x / this.vertices.length, y / this.vertices.length, z / this.vertices.length];
    }
}

// Your exact Vertex class
class Vertex implements VertexInterface {
    position: [number, number, number];
    index: number;
    
    constructor(position: [number, number, number], index = 0) {
        this.position = position;
        this.index = index;
    }
}

// Your exact Geometry class
class Geometry {
    vertices: VertexInterface[];
    faces: FaceInterface[];
    
    constructor() {
        this.vertices = [];
        this.faces = [];
    }
}

// Your exact IcosahedronGeometry class
class IcosahedronGeometry extends Geometry {
    radius: number;
    subdivisions: number;
    
    constructor(radius = 1, subdivisions = 0) {
        super();
        this.radius = radius;
        this.subdivisions = subdivisions;
        this.generateIcosahedron();
        
        for (let i = 0; i < subdivisions; i++) {
            this.subdivide();
        }
        
        this.normalizeVertices();
    }
    
    generateIcosahedron() {
        const t = (1 + Math.sqrt(5)) / 2;
        
        const positions = [
            [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
            [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
            [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
        ];
        
        this.vertices = positions.map((pos, i) => new Vertex(pos as [number, number, number], i));
        
        const faceIndices = [
            [0,11,5], [0,5,1], [0,1,7], [0,7,10], [0,10,11],
            [1,5,9], [5,11,4], [11,10,2], [10,7,6], [7,1,8],
            [3,9,4], [3,4,2], [3,2,6], [3,6,8], [3,8,9],
            [4,9,5], [2,4,11], [6,2,10], [8,6,7], [9,8,1]
        ];
        
        this.faces = faceIndices.map(indices =>
            new Face(indices.map(i => this.vertices[i]))
        );
    }
    
    subdivide() {
        const newFaces = [];
        const midpoints = new Map();
        
        const getMidpoint = (v1: VertexInterface, v2: VertexInterface) => {
            const key = `${Math.min(v1.index, v2.index)}-${Math.max(v1.index, v2.index)}`;
            if (midpoints.has(key)) {
                return midpoints.get(key);
            }
            
            const midPos = [
                (v1.position[0] + v2.position[0]) / 2,
                (v1.position[1] + v2.position[1]) / 2,
                (v1.position[2] + v2.position[2]) / 2
            ];
            const midVertex = new Vertex(midPos as [number, number, number], this.vertices.length);
            this.vertices.push(midVertex);
            midpoints.set(key, midVertex);
            return midVertex;
        };
        
        for (const face of this.faces) {
            const [v1, v2, v3] = face.vertices;
            const m1 = getMidpoint(v1, v2);
            const m2 = getMidpoint(v2, v3);
            const m3 = getMidpoint(v3, v1);
            
            newFaces.push(
                new Face([v1, m1, m3]),
                new Face([v2, m2, m1]),
                new Face([v3, m3, m2]),
                new Face([m1, m2, m3])
            );
        }
        
        this.faces = newFaces;
    }
    
    normalizeVertices() {
        for (const vertex of this.vertices) {
            const len = Math.sqrt(
                vertex.position[0] ** 2 +
                vertex.position[1] ** 2 +
                vertex.position[2] ** 2
            );
            vertex.position[0] = (vertex.position[0] / len) * this.radius;
            vertex.position[1] = (vertex.position[1] / len) * this.radius;
            vertex.position[2] = (vertex.position[2] / len) * this.radius;
        }
    }
}

// Your exact DiscGeometry class
class DiscGeometry extends Geometry {
    radius: number;
    segments: number;
    
    constructor(radius = 1, segments = 32) {
        super();
        this.radius = radius;
        this.segments = segments;
        this.generateDisc();
    }
    
    generateDisc() {
        this.vertices = [new Vertex([0, 0, 0], 0)];
        
        for (let i = 0; i <= this.segments; i++) {
            const angle = (i / this.segments) * Math.PI * 2;
            const x = Math.cos(angle) * this.radius;
            const y = Math.sin(angle) * this.radius;
            this.vertices.push(new Vertex([x, y, 0], i + 1));
        }
        
        for (let i = 0; i < this.segments; i++) {
            this.faces.push(new Face([
                this.vertices[0],
                this.vertices[i + 1],
                this.vertices[i + 2] || this.vertices[1]
            ]));
        }
    }
}

// Your exact ArcballControl class
class ArcballControl {
    canvas: HTMLCanvasElement;
    camera: { position: [number, number, number] };
    isDragging: boolean;
    lastMouse: { x: number; y: number };
    rotation: { x: number; y: number };
    distance: number;
    
    constructor(canvas: HTMLCanvasElement, camera: { position: [number, number, number] }) {
        this.canvas = canvas;
        this.camera = camera;
        this.isDragging = false;
        this.lastMouse = { x: 0, y: 0 };
        this.rotation = { x: 0, y: 0 };
        this.distance = 8;
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.canvas.addEventListener('mousedown', (e: MouseEvent) => this.onMouseDown(e));
        this.canvas.addEventListener('mousemove', (e: MouseEvent) => this.onMouseMove(e));
        this.canvas.addEventListener('mouseup', (e: MouseEvent) => this.onMouseUp(e));
        this.canvas.addEventListener('wheel', (e: WheelEvent) => this.onWheel(e));
    }
    
    onMouseDown(e: MouseEvent) {
        this.isDragging = true;
        this.lastMouse = { x: e.clientX, y: e.clientY };
        this.canvas.style.cursor = 'grabbing';
    }
    
    onMouseMove(e: MouseEvent) {
        if (!this.isDragging) return;
        
        const deltaX = e.clientX - this.lastMouse.x;
        const deltaY = e.clientY - this.lastMouse.y;
        
        this.rotation.y += deltaX * 0.01;
        this.rotation.x += deltaY * 0.01;
        
        this.lastMouse = { x: e.clientX, y: e.clientY };
        this.updateCamera();
    }
    
    onMouseUp(e: MouseEvent) {
        this.isDragging = false;
        this.canvas.style.cursor = 'grab';
    }
    
    onWheel(e: WheelEvent) {
        e.preventDefault();
        this.distance += e.deltaY * 0.01;
        this.distance = Math.max(3, Math.min(20, this.distance));
        this.updateCamera();
    }
    
    updateCamera() {
        const x = this.distance * Math.sin(this.rotation.y) * Math.cos(this.rotation.x);
        const y = this.distance * Math.sin(this.rotation.x);
        const z = this.distance * Math.cos(this.rotation.y) * Math.cos(this.rotation.x);
        
        this.camera.position = [x, y, z];
    }
}

// Your exact InfiniteGridMenu class
class InfiniteGridMenu {
    canvas: HTMLCanvasElement;
    items: ToolData[];
    gl: WebGL2RenderingContext | null = null;
    program: WebGLProgram | null = null;
    uniforms: Record<string, WebGLUniformLocation | null> = {};
    attributes: Record<string, number> = {};
    icosahedron?: IcosahedronGeometry;
    discGeometry?: DiscGeometry;
    discInstances: DiscInstance[] = [];
    vao?: WebGLVertexArrayObject | null;
    positionBuffer?: WebGLBuffer | null;
    uvBuffer?: WebGLBuffer | null;
    instancePositionBuffer?: WebGLBuffer | null;
    instanceScaleBuffer?: WebGLBuffer | null;
    instanceRotationBuffer?: WebGLBuffer | null;
    instanceTextureBuffer?: WebGLBuffer | null;
    camera: Camera;
    arcball?: ArcballControl;
    animationId?: number;
    
    constructor(canvas: HTMLCanvasElement, items: ToolData[] = []) {
        this.canvas = canvas;
        this.items = items;
        this.camera = { 
            position: [0, 0, 8],
            target: [0, 0, 0],
            up: [0, 1, 0]
        };
        this.init();
    }
    
    init() {
        this.gl = this.canvas.getContext('webgl2');
        if (!this.gl) {
            console.error('WebGL 2.0 not supported');
            return;
        }
        
        this.resizeCanvas();
        
        this.setupShaders();
        this.setupGeometry();
        this.setupControls();
        
        this.render();
    }
    
    resizeCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        
        if (this.gl) {
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    
    setupShaders() {
        this.program = this.createShaderProgram(discVertShaderSource, discFragShaderSource);
        
        if (!this.program || !this.gl) {
            console.error('Failed to create shader program');
            return;
        }
        
        this.uniforms = {
            projectionMatrix: this.gl.getUniformLocation(this.program, 'projectionMatrix'),
            viewMatrix: this.gl.getUniformLocation(this.program, 'viewMatrix'),
            modelMatrix: this.gl.getUniformLocation(this.program, 'modelMatrix'),
            time: this.gl.getUniformLocation(this.program, 'time'),
            textureAtlas: this.gl.getUniformLocation(this.program, 'textureAtlas'),
            cameraPosition: this.gl.getUniformLocation(this.program, 'cameraPosition')
        };
        
        this.attributes = {
            position: this.gl.getAttribLocation(this.program, 'position'),
            uv: this.gl.getAttribLocation(this.program, 'uv'),
            instancePosition: this.gl.getAttribLocation(this.program, 'instancePosition'),
            instanceScale: this.gl.getAttribLocation(this.program, 'instanceScale'),
            instanceRotation: this.gl.getAttribLocation(this.program, 'instanceRotation'),
            instanceTextureIndex: this.gl.getAttribLocation(this.program, 'instanceTextureIndex')
        };
    }
    
    createShaderProgram(vertexSource: string, fragmentSource: string): WebGLProgram | null {
        if (!this.gl) return null;
        
        const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexSource);
        const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentSource);
        
        if (!vertexShader || !fragmentShader) {
            return null;
        }
        
        const program = this.gl.createProgram();
        if (!program) return null;
        
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);
        
        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
            console.error('Program link error:', this.gl.getProgramInfoLog(program));
            return null;
        }
        
        return program;
    }
    
    createShader(type: GLenum, source: string): WebGLShader | null {
        if (!this.gl) return null;
        
        const shader = this.gl.createShader(type);
        if (!shader) return null;
        
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', this.gl.getShaderInfoLog(shader));
            return null;
        }
        
        return shader;
    }
    
    setupGeometry() {
        // Create icosahedron sphere
        this.icosahedron = new IcosahedronGeometry(3, 2);
        
        // Create disc geometry  
        this.discGeometry = new DiscGeometry(0.5, 16);
        
        // Create disc instances on sphere surface
        this.createDiscInstances();
        
        // Setup buffers
        this.setupBuffers();
    }
    
    createDiscInstances() {
        this.discInstances = [];
        if (!this.icosahedron) return;
        
        const faces = this.icosahedron.faces;
        const numInstances = Math.min(faces.length, Math.max(this.items.length * 8, 80));
        
        for (let i = 0; i < numInstances; i++) {
            const face = faces[i % faces.length];
            const instance: DiscInstance = {
                position: face.centroid,
                scale: 0.3 + Math.random() * 0.2,
                rotation: Math.random() * Math.PI * 2,
                textureIndex: i % 4
            };
            this.discInstances.push(instance);
        }
        
        console.log(`Created ${this.discInstances.length} disc instances`);
    }
    
    setupBuffers() {
        if (!this.gl) return;
        
        // Disc vertex data
        const vertices = [];
        const uvs = [];
        
        // Center
        vertices.push(0, 0, 0);
        uvs.push(0.5, 0.5);
        
        // Ring
        const segments = 16;
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            vertices.push(Math.cos(angle), Math.sin(angle), 0);
            uvs.push((Math.cos(angle) + 1) * 0.5, (Math.sin(angle) + 1) * 0.5);
        }
        
        // Create VAO
        this.vao = this.gl.createVertexArray();
        this.gl.bindVertexArray(this.vao);
        
        // Position buffer
        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(this.attributes.position);
        this.gl.vertexAttribPointer(this.attributes.position, 3, this.gl.FLOAT, false, 0, 0);
        
        // UV buffer
        this.uvBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.uvBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(uvs), this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(this.attributes.uv);
        this.gl.vertexAttribPointer(this.attributes.uv, 2, this.gl.FLOAT, false, 0, 0);
        
        // Instance buffers
        const instancePositions = [];
        const instanceScales = [];
        const instanceRotations = [];
        const instanceTextures = [];
        
        for (const instance of this.discInstances) {
            instancePositions.push(...instance.position);
            instanceScales.push(instance.scale);
            instanceRotations.push(instance.rotation);
            instanceTextures.push(instance.textureIndex);
        }
        
        // Instance position buffer
        this.instancePositionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.instancePositionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(instancePositions), this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(this.attributes.instancePosition);
        this.gl.vertexAttribPointer(this.attributes.instancePosition, 3, this.gl.FLOAT, false, 0, 0);
        this.gl.vertexAttribDivisor(this.attributes.instancePosition, 1);
        
        // Instance scale buffer
        this.instanceScaleBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.instanceScaleBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(instanceScales), this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(this.attributes.instanceScale);
        this.gl.vertexAttribPointer(this.attributes.instanceScale, 1, this.gl.FLOAT, false, 0, 0);
        this.gl.vertexAttribDivisor(this.attributes.instanceScale, 1);
        
        // Instance rotation buffer
        this.instanceRotationBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.instanceRotationBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(instanceRotations), this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(this.attributes.instanceRotation);
        this.gl.vertexAttribPointer(this.attributes.instanceRotation, 1, this.gl.FLOAT, false, 0, 0);
        this.gl.vertexAttribDivisor(this.attributes.instanceRotation, 1);
        
        // Instance texture buffer
        this.instanceTextureBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.instanceTextureBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(instanceTextures), this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(this.attributes.instanceTextureIndex);
        this.gl.vertexAttribPointer(this.attributes.instanceTextureIndex, 1, this.gl.FLOAT, false, 0, 0);
        this.gl.vertexAttribDivisor(this.attributes.instanceTextureIndex, 1);
        
        this.gl.bindVertexArray(null);
    }
    
    setupControls() {
        this.arcball = new ArcballControl(this.canvas, this.camera);
    }
    
    render = () => {
        if (!this.gl || !this.program) return;
        const gl = this.gl;
        
        // Clear
        gl.clearColor(0.05, 0.05, 0.1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        
        // Enable depth testing and blending
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        
        // Use shader program
        gl.useProgram(this.program);
        
        // Update uniforms
        const time = Date.now() * 0.001;
        gl.uniform1f(this.uniforms.time, time);
        
        // Create matrices using our Mat4 class
        const projectionMatrix = Mat4.perspective(
            Mat4.create(),
            Math.PI / 4,
            this.canvas.width / this.canvas.height,
            0.1,
            100.0
        );
        
        const viewMatrix = Mat4.lookAt(
            Mat4.create(),
            this.camera.position,
            this.camera.target,
            this.camera.up
        );
        
        const modelMatrix = Mat4.create();
        
        gl.uniformMatrix4fv(this.uniforms.projectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(this.uniforms.viewMatrix, false, viewMatrix);
        gl.uniformMatrix4fv(this.uniforms.modelMatrix, false, modelMatrix);
        gl.uniform3fv(this.uniforms.cameraPosition, this.camera.position);
        
        // Draw instances
        if (this.vao) {
            gl.bindVertexArray(this.vao);
            gl.drawArraysInstanced(gl.TRIANGLE_FAN, 0, 18, this.discInstances.length);
            gl.bindVertexArray(null);
        }
        
        this.animationId = requestAnimationFrame(this.render);
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        if (this.gl) {
            if (this.program) this.gl.deleteProgram(this.program);
            if (this.positionBuffer) this.gl.deleteBuffer(this.positionBuffer);
            if (this.uvBuffer) this.gl.deleteBuffer(this.uvBuffer);
            if (this.instancePositionBuffer) this.gl.deleteBuffer(this.instancePositionBuffer);
            if (this.instanceScaleBuffer) this.gl.deleteBuffer(this.instanceScaleBuffer);
            if (this.instanceRotationBuffer) this.gl.deleteBuffer(this.instanceRotationBuffer);
            if (this.instanceTextureBuffer) this.gl.deleteBuffer(this.instanceTextureBuffer);
            if (this.vao) this.gl.deleteVertexArray(this.vao);
        }
    }
}

// Initialize the InfiniteMenu when DOM is ready
let infiniteMenuInstance: InfiniteGridMenu | null = null;

function initInfiniteMenu(canvasElement: HTMLCanvasElement, toolsData: ToolData[]) {
    if (infiniteMenuInstance) {
        infiniteMenuInstance.destroy();
    }
    
    infiniteMenuInstance = new InfiniteGridMenu(canvasElement, toolsData);
    
    // Handle resize
    const handleResize = () => {
        if (infiniteMenuInstance) {
            infiniteMenuInstance.resizeCanvas();
        }
    };
    
    window.addEventListener('resize', handleResize);
    
    return infiniteMenuInstance;
}

// Export for global use
(window as any).InfiniteGridMenu = InfiniteGridMenu;
(window as any).initInfiniteMenu = initInfiniteMenu;