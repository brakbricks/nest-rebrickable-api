# Brakbricks RebrickableAPI for NestJS

A module wrapping @brakbricks/rebrickable-api for NestJS.

## Usage

### Installing

`npm i @brakbricks/nest-rebrickable-api`

### Usage

Register the module.

```
import { Module } from '@nestjs/common';
import { RebrickableApiModule } from '@brakbricks/nest-rebrickable-api';

@Module({
  imports: [
    RebrickableApiModule.register({ apiKey: 'your-secret-api-key' }),
  ]
})
export class AppModule {}
```

inject `RebrickableApiClient` into any service

```
import { RebrickableApiClient } from '@brakbricks/rebrickable-api';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly rebrickableApi: RebrickableApiClient,
  ) {}
}
```

### async register function?

Soon

## Documentation

See https://brakbricks.github.io/nest-rebrickable-api/

## Report bugs

https://github.com/brakbricks/nest-rebrickable-api/issues
