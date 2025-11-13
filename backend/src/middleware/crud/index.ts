import { Request } from 'express';
import { z } from 'zod';

export interface CrudPermission {
  securable: string;
  permission: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';
}

export interface ValidatedRequest {
  credential: {
    idAccount: number;
    idUser: number;
  };
  params: any;
}

export class CrudController {
  private permissions: CrudPermission[];

  constructor(permissions: CrudPermission[]) {
    this.permissions = permissions;
  }

  async create(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validateRequest(req, schema, 'CREATE');
  }

  async read(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validateRequest(req, schema, 'READ');
  }

  async update(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validateRequest(req, schema, 'UPDATE');
  }

  async delete(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validateRequest(req, schema, 'DELETE');
  }

  private async validateRequest(
    req: Request,
    schema: z.ZodSchema,
    operation: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE'
  ): Promise<[ValidatedRequest | undefined, any]> {
    try {
      const params = await schema.parseAsync({
        ...req.params,
        ...req.query,
        ...req.body,
      });

      const validated: ValidatedRequest = {
        credential: {
          idAccount: 1,
          idUser: 1,
        },
        params,
      };

      return [validated, undefined];
    } catch (error) {
      return [undefined, error];
    }
  }
}

export const successResponse = (data: any) => ({
  success: true,
  data,
  timestamp: new Date().toISOString(),
});

export const errorResponse = (message: string, code?: string) => ({
  success: false,
  error: {
    code: code || 'VALIDATION_ERROR',
    message,
  },
  timestamp: new Date().toISOString(),
});

export const StatusGeneralError = {
  statusCode: 500,
  code: 'INTERNAL_SERVER_ERROR',
  message: 'An unexpected error occurred',
};
