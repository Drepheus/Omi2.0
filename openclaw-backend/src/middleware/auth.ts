import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const internalSecret = process.env.INTERNAL_API_SECRET;

  if (!internalSecret) {
    console.error('[AuthMiddleware Error] INTERNAL_API_SECRET environment variable is missing.');
    return res.status(500).json({ error: 'Server configuration error: Authentication secret missing.' });
  }

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or malformed Authorization header.' });
  }

  const token = authHeader.split(' ')[1];

  if (token !== internalSecret) {
    return res.status(401).json({ error: 'Unauthorized: Invalid authentication token.' });
  }

  next();
};
