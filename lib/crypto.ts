import crypto from 'crypto';

export function encrypt(text: string): string {
  const encryptionKey = process.env.ENCRYPTION_KEY;
  if (!encryptionKey) {
    throw new Error('ENCRYPTION_KEY environment variable is not set');
  }

  // Key must be 32 bytes (64 hex characters)
  const key = Buffer.from(encryptionKey, 'hex');
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return iv.toString('hex') + ':' + encrypted;
}

export function decrypt(encryptedText: string): string {
  const encryptionKey = process.env.ENCRYPTION_KEY;
  if (!encryptionKey) {
    throw new Error('ENCRYPTION_KEY environment variable is not set');
  }

  const parts = encryptedText.split(':');
  if (parts.length < 2) {
    throw new Error('Invalid encrypted format');
  }

  const iv = Buffer.from(parts.shift()!, 'hex');
  const encrypted = parts.join(':');
  const key = Buffer.from(encryptionKey, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}
export function isEncryptedFormat(text: string): boolean {
  if (!text) return false;
  const parts = text.split(':');
  return parts.length === 2 && parts[0].length === 32;
}
