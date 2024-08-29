import { DynamicModule, Module } from "@nestjs/common";
import { RebrickableApiClient } from "@brakbricks/rebrickable-api";

@Module({})
export class RebrickableApiModule {
  public static register({ apiKey }: { apiKey: string }): DynamicModule {
    return {
      module: RebrickableApiModule,
      providers: [
        {
          provide: RebrickableApiClient,
          useValue: new RebrickableApiClient(apiKey),
        },
      ],
      exports: [RebrickableApiClient],
    };
  }
}
