/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./utils/lucia").Auth;
  type DatabaseUserAttributes = {
    username: string;
    role: number;
  };
  type DatabaseSessionAttributes = {};
}
