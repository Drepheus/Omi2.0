import crypto from 'crypto';

/**
 * Returns a 32-byte Buffer key derived from process.env.ENCRYPTION_KEY.
 * Accepts either a 64-character hex string or any text secret (hashed via SHA-256 to 32 bytes).
 */
function getEncryptionKey(): Buffer {
  const secret = process.env.ENCRYPTION_KEY || 'default_32_byte_secret_key_change_me_in_env!';

  // If 64 hex characters (32 bytes in hex)
  if (secret.length === 64 && /^[0-9a-fA-F]+$/.test(secret)) {
    return Buffer.from(secret, 'hex');
  }

  // Otherwise derive a 32-byte key via SHA-256
  return crypto.createHash('sha256').update(secret).digest();
}

/**
 * Encrypts a plain text string (e.g., API key) using AES-256-CBC.
 * @param text - Plain text string to encrypt
 * @returns Encrypted cipher text in `iv:encryptedData` format
 */
export function encryptApiKey(text: string): string {
  if (!text) return '';
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return `${iv.toString('hex')}:${encrypted}`;
}

/**
 * Decrypts an `iv:encryptedData` cipher text string using AES-256-CBC.
 * @param cipherText - Cipher text in `iv:encryptedData` format
 * @returns Decrypted plain text string
 */
export function decryptApiKey(cipherText: string): string {
  if (!cipherText) return '';
  const parts = cipherText.split(':');
  if (parts.length < 2) {
    throw new Error('Invalid encrypted format. Expected iv:encryptedData');
  }

  const ivHex = parts.shift()!;
  const encryptedHex = parts.join(':');

  const iv = Buffer.from(ivHex, 'hex');
  const key = getEncryptionKey();
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

  let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

// Aliases for backwards compatibility
export const encrypt = encryptApiKey;
export const decrypt = decryptApiKey;

export function isEncryptedFormat(text: string): boolean {
  if (!text) return false;
  const parts = text.split(':');
  return parts.length === 2 && parts[0].length === 32;
}
