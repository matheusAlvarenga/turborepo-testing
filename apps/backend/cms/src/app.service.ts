import { Injectable } from "@nestjs/common";

import { HelloApiResponse } from "api";

@Injectable()
export class AppService {
  getHello(): HelloApiResponse {
    return { text: "Hello World!" };
  }
}
