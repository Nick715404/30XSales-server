import { OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnApplicationShutdown {
    onModuleInit(): Promise<void>;
    onApplicationShutdown(signal?: string): Promise<void>;
}
