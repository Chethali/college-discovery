
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model College
 * 
 */
export type College = $Result.DefaultSelection<Prisma.$CollegePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Placement
 * 
 */
export type Placement = $Result.DefaultSelection<Prisma.$PlacementPayload>
/**
 * Model SavedCollege
 * 
 */
export type SavedCollege = $Result.DefaultSelection<Prisma.$SavedCollegePayload>
/**
 * Model CompareSession
 * 
 */
export type CompareSession = $Result.DefaultSelection<Prisma.$CompareSessionPayload>
/**
 * Model CompareSessionCollege
 * 
 */
export type CompareSessionCollege = $Result.DefaultSelection<Prisma.$CompareSessionCollegePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CollegeType: {
  Government: 'Government',
  Private: 'Private',
  Deemed: 'Deemed'
};

export type CollegeType = (typeof CollegeType)[keyof typeof CollegeType]

}

export type CollegeType = $Enums.CollegeType

export const CollegeType: typeof $Enums.CollegeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.college`: Exposes CRUD operations for the **College** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colleges
    * const colleges = await prisma.college.findMany()
    * ```
    */
  get college(): Prisma.CollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.placement`: Exposes CRUD operations for the **Placement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Placements
    * const placements = await prisma.placement.findMany()
    * ```
    */
  get placement(): Prisma.PlacementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedCollege`: Exposes CRUD operations for the **SavedCollege** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedColleges
    * const savedColleges = await prisma.savedCollege.findMany()
    * ```
    */
  get savedCollege(): Prisma.SavedCollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compareSession`: Exposes CRUD operations for the **CompareSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompareSessions
    * const compareSessions = await prisma.compareSession.findMany()
    * ```
    */
  get compareSession(): Prisma.CompareSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compareSessionCollege`: Exposes CRUD operations for the **CompareSessionCollege** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompareSessionColleges
    * const compareSessionColleges = await prisma.compareSessionCollege.findMany()
    * ```
    */
  get compareSessionCollege(): Prisma.CompareSessionCollegeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    College: 'College',
    Course: 'Course',
    Placement: 'Placement',
    SavedCollege: 'SavedCollege',
    CompareSession: 'CompareSession',
    CompareSessionCollege: 'CompareSessionCollege'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "college" | "course" | "placement" | "savedCollege" | "compareSession" | "compareSessionCollege"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      College: {
        payload: Prisma.$CollegePayload<ExtArgs>
        fields: Prisma.CollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findFirst: {
            args: Prisma.CollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findMany: {
            args: Prisma.CollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          create: {
            args: Prisma.CollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          createMany: {
            args: Prisma.CollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          delete: {
            args: Prisma.CollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          update: {
            args: Prisma.CollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          deleteMany: {
            args: Prisma.CollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          upsert: {
            args: Prisma.CollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          aggregate: {
            args: Prisma.CollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollege>
          }
          groupBy: {
            args: Prisma.CollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Placement: {
        payload: Prisma.$PlacementPayload<ExtArgs>
        fields: Prisma.PlacementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlacementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlacementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          findFirst: {
            args: Prisma.PlacementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlacementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          findMany: {
            args: Prisma.PlacementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>[]
          }
          create: {
            args: Prisma.PlacementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          createMany: {
            args: Prisma.PlacementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlacementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>[]
          }
          delete: {
            args: Prisma.PlacementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          update: {
            args: Prisma.PlacementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          deleteMany: {
            args: Prisma.PlacementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlacementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlacementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>[]
          }
          upsert: {
            args: Prisma.PlacementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          aggregate: {
            args: Prisma.PlacementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlacement>
          }
          groupBy: {
            args: Prisma.PlacementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlacementCountArgs<ExtArgs>
            result: $Utils.Optional<PlacementCountAggregateOutputType> | number
          }
        }
      }
      SavedCollege: {
        payload: Prisma.$SavedCollegePayload<ExtArgs>
        fields: Prisma.SavedCollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedCollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedCollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload>
          }
          findFirst: {
            args: Prisma.SavedCollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedCollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload>
          }
          findMany: {
            args: Prisma.SavedCollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload>[]
          }
          create: {
            args: Prisma.SavedCollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload>
          }
          createMany: {
            args: Prisma.SavedCollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedCollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload>[]
          }
          delete: {
            args: Prisma.SavedCollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload>
          }
          update: {
            args: Prisma.SavedCollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload>
          }
          deleteMany: {
            args: Prisma.SavedCollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedCollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedCollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload>[]
          }
          upsert: {
            args: Prisma.SavedCollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCollegePayload>
          }
          aggregate: {
            args: Prisma.SavedCollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedCollege>
          }
          groupBy: {
            args: Prisma.SavedCollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedCollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedCollegeCountArgs<ExtArgs>
            result: $Utils.Optional<SavedCollegeCountAggregateOutputType> | number
          }
        }
      }
      CompareSession: {
        payload: Prisma.$CompareSessionPayload<ExtArgs>
        fields: Prisma.CompareSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompareSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompareSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          findFirst: {
            args: Prisma.CompareSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompareSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          findMany: {
            args: Prisma.CompareSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>[]
          }
          create: {
            args: Prisma.CompareSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          createMany: {
            args: Prisma.CompareSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompareSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>[]
          }
          delete: {
            args: Prisma.CompareSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          update: {
            args: Prisma.CompareSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          deleteMany: {
            args: Prisma.CompareSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompareSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompareSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>[]
          }
          upsert: {
            args: Prisma.CompareSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          aggregate: {
            args: Prisma.CompareSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompareSession>
          }
          groupBy: {
            args: Prisma.CompareSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompareSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompareSessionCountArgs<ExtArgs>
            result: $Utils.Optional<CompareSessionCountAggregateOutputType> | number
          }
        }
      }
      CompareSessionCollege: {
        payload: Prisma.$CompareSessionCollegePayload<ExtArgs>
        fields: Prisma.CompareSessionCollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompareSessionCollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompareSessionCollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload>
          }
          findFirst: {
            args: Prisma.CompareSessionCollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompareSessionCollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload>
          }
          findMany: {
            args: Prisma.CompareSessionCollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload>[]
          }
          create: {
            args: Prisma.CompareSessionCollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload>
          }
          createMany: {
            args: Prisma.CompareSessionCollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompareSessionCollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload>[]
          }
          delete: {
            args: Prisma.CompareSessionCollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload>
          }
          update: {
            args: Prisma.CompareSessionCollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload>
          }
          deleteMany: {
            args: Prisma.CompareSessionCollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompareSessionCollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompareSessionCollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload>[]
          }
          upsert: {
            args: Prisma.CompareSessionCollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionCollegePayload>
          }
          aggregate: {
            args: Prisma.CompareSessionCollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompareSessionCollege>
          }
          groupBy: {
            args: Prisma.CompareSessionCollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompareSessionCollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompareSessionCollegeCountArgs<ExtArgs>
            result: $Utils.Optional<CompareSessionCollegeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    college?: CollegeOmit
    course?: CourseOmit
    placement?: PlacementOmit
    savedCollege?: SavedCollegeOmit
    compareSession?: CompareSessionOmit
    compareSessionCollege?: CompareSessionCollegeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedColleges: number
    compareSessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedColleges?: boolean | UserCountOutputTypeCountSavedCollegesArgs
    compareSessions?: boolean | UserCountOutputTypeCountCompareSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedCollegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCollegeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompareSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareSessionWhereInput
  }


  /**
   * Count Type CollegeCountOutputType
   */

  export type CollegeCountOutputType = {
    courses: number
    placements: number
    savedBy: number
    compareSessions: number
  }

  export type CollegeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CollegeCountOutputTypeCountCoursesArgs
    placements?: boolean | CollegeCountOutputTypeCountPlacementsArgs
    savedBy?: boolean | CollegeCountOutputTypeCountSavedByArgs
    compareSessions?: boolean | CollegeCountOutputTypeCountCompareSessionsArgs
  }

  // Custom InputTypes
  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCountOutputType
     */
    select?: CollegeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCollegeWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountCompareSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareSessionCollegeWhereInput
  }


  /**
   * Count Type CompareSessionCountOutputType
   */

  export type CompareSessionCountOutputType = {
    colleges: number
  }

  export type CompareSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colleges?: boolean | CompareSessionCountOutputTypeCountCollegesArgs
  }

  // Custom InputTypes
  /**
   * CompareSessionCountOutputType without action
   */
  export type CompareSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCountOutputType
     */
    select?: CompareSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompareSessionCountOutputType without action
   */
  export type CompareSessionCountOutputTypeCountCollegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareSessionCollegeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    savedColleges?: boolean | User$savedCollegesArgs<ExtArgs>
    compareSessions?: boolean | User$compareSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedColleges?: boolean | User$savedCollegesArgs<ExtArgs>
    compareSessions?: boolean | User$compareSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      savedColleges: Prisma.$SavedCollegePayload<ExtArgs>[]
      compareSessions: Prisma.$CompareSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedColleges<T extends User$savedCollegesArgs<ExtArgs> = {}>(args?: Subset<T, User$savedCollegesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    compareSessions<T extends User$compareSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$compareSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.savedColleges
   */
  export type User$savedCollegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    where?: SavedCollegeWhereInput
    orderBy?: SavedCollegeOrderByWithRelationInput | SavedCollegeOrderByWithRelationInput[]
    cursor?: SavedCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedCollegeScalarFieldEnum | SavedCollegeScalarFieldEnum[]
  }

  /**
   * User.compareSessions
   */
  export type User$compareSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    where?: CompareSessionWhereInput
    orderBy?: CompareSessionOrderByWithRelationInput | CompareSessionOrderByWithRelationInput[]
    cursor?: CompareSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompareSessionScalarFieldEnum | CompareSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model College
   */

  export type AggregateCollege = {
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  export type CollegeAvgAggregateOutputType = {
    rating: number | null
    totalFees: number | null
    establishedYear: number | null
  }

  export type CollegeSumAggregateOutputType = {
    rating: number | null
    totalFees: number | null
    establishedYear: number | null
  }

  export type CollegeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    location: string | null
    state: string | null
    type: $Enums.CollegeType | null
    rating: number | null
    totalFees: number | null
    establishedYear: number | null
    imageUrl: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollegeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    location: string | null
    state: string | null
    type: $Enums.CollegeType | null
    rating: number | null
    totalFees: number | null
    establishedYear: number | null
    imageUrl: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollegeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    location: number
    state: number
    type: number
    rating: number
    totalFees: number
    establishedYear: number
    imageUrl: number
    website: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollegeAvgAggregateInputType = {
    rating?: true
    totalFees?: true
    establishedYear?: true
  }

  export type CollegeSumAggregateInputType = {
    rating?: true
    totalFees?: true
    establishedYear?: true
  }

  export type CollegeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    state?: true
    type?: true
    rating?: true
    totalFees?: true
    establishedYear?: true
    imageUrl?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollegeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    state?: true
    type?: true
    rating?: true
    totalFees?: true
    establishedYear?: true
    imageUrl?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollegeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    state?: true
    type?: true
    rating?: true
    totalFees?: true
    establishedYear?: true
    imageUrl?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which College to aggregate.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colleges
    **/
    _count?: true | CollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollegeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollegeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeMaxAggregateInputType
  }

  export type GetCollegeAggregateType<T extends CollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollege[P]>
      : GetScalarType<T[P], AggregateCollege[P]>
  }




  export type CollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithAggregationInput | CollegeOrderByWithAggregationInput[]
    by: CollegeScalarFieldEnum[] | CollegeScalarFieldEnum
    having?: CollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCountAggregateInputType | true
    _avg?: CollegeAvgAggregateInputType
    _sum?: CollegeSumAggregateInputType
    _min?: CollegeMinAggregateInputType
    _max?: CollegeMaxAggregateInputType
  }

  export type CollegeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating: number
    totalFees: number
    establishedYear: number
    imageUrl: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  type GetCollegeGroupByPayload<T extends CollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeGroupByOutputType[P]>
        }
      >
    >


  export type CollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    state?: boolean
    type?: boolean
    rating?: boolean
    totalFees?: boolean
    establishedYear?: boolean
    imageUrl?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courses?: boolean | College$coursesArgs<ExtArgs>
    placements?: boolean | College$placementsArgs<ExtArgs>
    savedBy?: boolean | College$savedByArgs<ExtArgs>
    compareSessions?: boolean | College$compareSessionsArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    state?: boolean
    type?: boolean
    rating?: boolean
    totalFees?: boolean
    establishedYear?: boolean
    imageUrl?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    state?: boolean
    type?: boolean
    rating?: boolean
    totalFees?: boolean
    establishedYear?: boolean
    imageUrl?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    state?: boolean
    type?: boolean
    rating?: boolean
    totalFees?: boolean
    establishedYear?: boolean
    imageUrl?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "location" | "state" | "type" | "rating" | "totalFees" | "establishedYear" | "imageUrl" | "website" | "createdAt" | "updatedAt", ExtArgs["result"]["college"]>
  export type CollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | College$coursesArgs<ExtArgs>
    placements?: boolean | College$placementsArgs<ExtArgs>
    savedBy?: boolean | College$savedByArgs<ExtArgs>
    compareSessions?: boolean | College$compareSessionsArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "College"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
      placements: Prisma.$PlacementPayload<ExtArgs>[]
      savedBy: Prisma.$SavedCollegePayload<ExtArgs>[]
      compareSessions: Prisma.$CompareSessionCollegePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      location: string
      state: string
      type: $Enums.CollegeType
      rating: number
      totalFees: number
      establishedYear: number
      imageUrl: string | null
      website: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["college"]>
    composites: {}
  }

  type CollegeGetPayload<S extends boolean | null | undefined | CollegeDefaultArgs> = $Result.GetResult<Prisma.$CollegePayload, S>

  type CollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCountAggregateInputType | true
    }

  export interface CollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['College'], meta: { name: 'College' } }
    /**
     * Find zero or one College that matches the filter.
     * @param {CollegeFindUniqueArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeFindUniqueArgs>(args: SelectSubset<T, CollegeFindUniqueArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one College that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeFindUniqueOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeFindFirstArgs>(args?: SelectSubset<T, CollegeFindFirstArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colleges
     * const colleges = await prisma.college.findMany()
     * 
     * // Get first 10 Colleges
     * const colleges = await prisma.college.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeWithIdOnly = await prisma.college.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeFindManyArgs>(args?: SelectSubset<T, CollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a College.
     * @param {CollegeCreateArgs} args - Arguments to create a College.
     * @example
     * // Create one College
     * const College = await prisma.college.create({
     *   data: {
     *     // ... data to create a College
     *   }
     * })
     * 
     */
    create<T extends CollegeCreateArgs>(args: SelectSubset<T, CollegeCreateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colleges.
     * @param {CollegeCreateManyArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCreateManyArgs>(args?: SelectSubset<T, CollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colleges and returns the data saved in the database.
     * @param {CollegeCreateManyAndReturnArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a College.
     * @param {CollegeDeleteArgs} args - Arguments to delete one College.
     * @example
     * // Delete one College
     * const College = await prisma.college.delete({
     *   where: {
     *     // ... filter to delete one College
     *   }
     * })
     * 
     */
    delete<T extends CollegeDeleteArgs>(args: SelectSubset<T, CollegeDeleteArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one College.
     * @param {CollegeUpdateArgs} args - Arguments to update one College.
     * @example
     * // Update one College
     * const college = await prisma.college.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeUpdateArgs>(args: SelectSubset<T, CollegeUpdateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colleges.
     * @param {CollegeDeleteManyArgs} args - Arguments to filter Colleges to delete.
     * @example
     * // Delete a few Colleges
     * const { count } = await prisma.college.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeDeleteManyArgs>(args?: SelectSubset<T, CollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeUpdateManyArgs>(args: SelectSubset<T, CollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges and returns the data updated in the database.
     * @param {CollegeUpdateManyAndReturnArgs} args - Arguments to update many Colleges.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one College.
     * @param {CollegeUpsertArgs} args - Arguments to update or create a College.
     * @example
     * // Update or create a College
     * const college = await prisma.college.upsert({
     *   create: {
     *     // ... data to create a College
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the College we want to update
     *   }
     * })
     */
    upsert<T extends CollegeUpsertArgs>(args: SelectSubset<T, CollegeUpsertArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCountArgs} args - Arguments to filter Colleges to count.
     * @example
     * // Count the number of Colleges
     * const count = await prisma.college.count({
     *   where: {
     *     // ... the filter for the Colleges we want to count
     *   }
     * })
    **/
    count<T extends CollegeCountArgs>(
      args?: Subset<T, CollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollegeAggregateArgs>(args: Subset<T, CollegeAggregateArgs>): Prisma.PrismaPromise<GetCollegeAggregateType<T>>

    /**
     * Group by College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeGroupByArgs['orderBy'] }
        : { orderBy?: CollegeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the College model
   */
  readonly fields: CollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for College.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends College$coursesArgs<ExtArgs> = {}>(args?: Subset<T, College$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    placements<T extends College$placementsArgs<ExtArgs> = {}>(args?: Subset<T, College$placementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends College$savedByArgs<ExtArgs> = {}>(args?: Subset<T, College$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    compareSessions<T extends College$compareSessionsArgs<ExtArgs> = {}>(args?: Subset<T, College$compareSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the College model
   */
  interface CollegeFieldRefs {
    readonly id: FieldRef<"College", 'String'>
    readonly name: FieldRef<"College", 'String'>
    readonly description: FieldRef<"College", 'String'>
    readonly location: FieldRef<"College", 'String'>
    readonly state: FieldRef<"College", 'String'>
    readonly type: FieldRef<"College", 'CollegeType'>
    readonly rating: FieldRef<"College", 'Float'>
    readonly totalFees: FieldRef<"College", 'Int'>
    readonly establishedYear: FieldRef<"College", 'Int'>
    readonly imageUrl: FieldRef<"College", 'String'>
    readonly website: FieldRef<"College", 'String'>
    readonly createdAt: FieldRef<"College", 'DateTime'>
    readonly updatedAt: FieldRef<"College", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * College findUnique
   */
  export type CollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findUniqueOrThrow
   */
  export type CollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findFirst
   */
  export type CollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findFirstOrThrow
   */
  export type CollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findMany
   */
  export type CollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which Colleges to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College create
   */
  export type CollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a College.
     */
    data: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
  }

  /**
   * College createMany
   */
  export type CollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College createManyAndReturn
   */
  export type CollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College update
   */
  export type CollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a College.
     */
    data: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
    /**
     * Choose, which College to update.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College updateMany
   */
  export type CollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College updateManyAndReturn
   */
  export type CollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College upsert
   */
  export type CollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the College to update in case it exists.
     */
    where: CollegeWhereUniqueInput
    /**
     * In case the College found by the `where` argument doesn't exist, create a new College with this data.
     */
    create: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
    /**
     * In case the College was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
  }

  /**
   * College delete
   */
  export type CollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter which College to delete.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College deleteMany
   */
  export type CollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colleges to delete
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to delete.
     */
    limit?: number
  }

  /**
   * College.courses
   */
  export type College$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * College.placements
   */
  export type College$placementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    where?: PlacementWhereInput
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    cursor?: PlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * College.savedBy
   */
  export type College$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    where?: SavedCollegeWhereInput
    orderBy?: SavedCollegeOrderByWithRelationInput | SavedCollegeOrderByWithRelationInput[]
    cursor?: SavedCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedCollegeScalarFieldEnum | SavedCollegeScalarFieldEnum[]
  }

  /**
   * College.compareSessions
   */
  export type College$compareSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    where?: CompareSessionCollegeWhereInput
    orderBy?: CompareSessionCollegeOrderByWithRelationInput | CompareSessionCollegeOrderByWithRelationInput[]
    cursor?: CompareSessionCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompareSessionCollegeScalarFieldEnum | CompareSessionCollegeScalarFieldEnum[]
  }

  /**
   * College without action
   */
  export type CollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    fees: number | null
  }

  export type CourseSumAggregateOutputType = {
    fees: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    duration: string | null
    fees: number | null
    description: string | null
    collegeId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    duration: string | null
    fees: number | null
    description: string | null
    collegeId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    duration: number
    fees: number
    description: number
    collegeId: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    fees?: true
  }

  export type CourseSumAggregateInputType = {
    fees?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    fees?: true
    description?: true
    collegeId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    fees?: true
    description?: true
    collegeId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    fees?: true
    description?: true
    collegeId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    duration: string
    fees: number
    description: string | null
    collegeId: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    fees?: boolean
    description?: boolean
    collegeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    fees?: boolean
    description?: boolean
    collegeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    fees?: boolean
    description?: boolean
    collegeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    duration?: boolean
    fees?: boolean
    description?: boolean
    collegeId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "duration" | "fees" | "description" | "collegeId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      duration: string
      fees: number
      description: string | null
      collegeId: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly duration: FieldRef<"Course", 'String'>
    readonly fees: FieldRef<"Course", 'Int'>
    readonly description: FieldRef<"Course", 'String'>
    readonly collegeId: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Placement
   */

  export type AggregatePlacement = {
    _count: PlacementCountAggregateOutputType | null
    _avg: PlacementAvgAggregateOutputType | null
    _sum: PlacementSumAggregateOutputType | null
    _min: PlacementMinAggregateOutputType | null
    _max: PlacementMaxAggregateOutputType | null
  }

  export type PlacementAvgAggregateOutputType = {
    averagePackage: number | null
    highestPackage: number | null
    placementPercentage: number | null
    year: number | null
  }

  export type PlacementSumAggregateOutputType = {
    averagePackage: number | null
    highestPackage: number | null
    placementPercentage: number | null
    year: number | null
  }

  export type PlacementMinAggregateOutputType = {
    id: string | null
    averagePackage: number | null
    highestPackage: number | null
    placementPercentage: number | null
    topRecruiters: string | null
    year: number | null
    collegeId: string | null
  }

  export type PlacementMaxAggregateOutputType = {
    id: string | null
    averagePackage: number | null
    highestPackage: number | null
    placementPercentage: number | null
    topRecruiters: string | null
    year: number | null
    collegeId: string | null
  }

  export type PlacementCountAggregateOutputType = {
    id: number
    averagePackage: number
    highestPackage: number
    placementPercentage: number
    topRecruiters: number
    year: number
    collegeId: number
    _all: number
  }


  export type PlacementAvgAggregateInputType = {
    averagePackage?: true
    highestPackage?: true
    placementPercentage?: true
    year?: true
  }

  export type PlacementSumAggregateInputType = {
    averagePackage?: true
    highestPackage?: true
    placementPercentage?: true
    year?: true
  }

  export type PlacementMinAggregateInputType = {
    id?: true
    averagePackage?: true
    highestPackage?: true
    placementPercentage?: true
    topRecruiters?: true
    year?: true
    collegeId?: true
  }

  export type PlacementMaxAggregateInputType = {
    id?: true
    averagePackage?: true
    highestPackage?: true
    placementPercentage?: true
    topRecruiters?: true
    year?: true
    collegeId?: true
  }

  export type PlacementCountAggregateInputType = {
    id?: true
    averagePackage?: true
    highestPackage?: true
    placementPercentage?: true
    topRecruiters?: true
    year?: true
    collegeId?: true
    _all?: true
  }

  export type PlacementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Placement to aggregate.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Placements
    **/
    _count?: true | PlacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlacementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlacementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacementMaxAggregateInputType
  }

  export type GetPlacementAggregateType<T extends PlacementAggregateArgs> = {
        [P in keyof T & keyof AggregatePlacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlacement[P]>
      : GetScalarType<T[P], AggregatePlacement[P]>
  }




  export type PlacementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementWhereInput
    orderBy?: PlacementOrderByWithAggregationInput | PlacementOrderByWithAggregationInput[]
    by: PlacementScalarFieldEnum[] | PlacementScalarFieldEnum
    having?: PlacementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacementCountAggregateInputType | true
    _avg?: PlacementAvgAggregateInputType
    _sum?: PlacementSumAggregateInputType
    _min?: PlacementMinAggregateInputType
    _max?: PlacementMaxAggregateInputType
  }

  export type PlacementGroupByOutputType = {
    id: string
    averagePackage: number
    highestPackage: number
    placementPercentage: number
    topRecruiters: string
    year: number
    collegeId: string
    _count: PlacementCountAggregateOutputType | null
    _avg: PlacementAvgAggregateOutputType | null
    _sum: PlacementSumAggregateOutputType | null
    _min: PlacementMinAggregateOutputType | null
    _max: PlacementMaxAggregateOutputType | null
  }

  type GetPlacementGroupByPayload<T extends PlacementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacementGroupByOutputType[P]>
            : GetScalarType<T[P], PlacementGroupByOutputType[P]>
        }
      >
    >


  export type PlacementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    averagePackage?: boolean
    highestPackage?: boolean
    placementPercentage?: boolean
    topRecruiters?: boolean
    year?: boolean
    collegeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type PlacementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    averagePackage?: boolean
    highestPackage?: boolean
    placementPercentage?: boolean
    topRecruiters?: boolean
    year?: boolean
    collegeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type PlacementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    averagePackage?: boolean
    highestPackage?: boolean
    placementPercentage?: boolean
    topRecruiters?: boolean
    year?: boolean
    collegeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type PlacementSelectScalar = {
    id?: boolean
    averagePackage?: boolean
    highestPackage?: boolean
    placementPercentage?: boolean
    topRecruiters?: boolean
    year?: boolean
    collegeId?: boolean
  }

  export type PlacementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "averagePackage" | "highestPackage" | "placementPercentage" | "topRecruiters" | "year" | "collegeId", ExtArgs["result"]["placement"]>
  export type PlacementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type PlacementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type PlacementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $PlacementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Placement"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      averagePackage: number
      highestPackage: number
      placementPercentage: number
      topRecruiters: string
      year: number
      collegeId: string
    }, ExtArgs["result"]["placement"]>
    composites: {}
  }

  type PlacementGetPayload<S extends boolean | null | undefined | PlacementDefaultArgs> = $Result.GetResult<Prisma.$PlacementPayload, S>

  type PlacementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlacementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacementCountAggregateInputType | true
    }

  export interface PlacementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Placement'], meta: { name: 'Placement' } }
    /**
     * Find zero or one Placement that matches the filter.
     * @param {PlacementFindUniqueArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlacementFindUniqueArgs>(args: SelectSubset<T, PlacementFindUniqueArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Placement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlacementFindUniqueOrThrowArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlacementFindUniqueOrThrowArgs>(args: SelectSubset<T, PlacementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Placement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementFindFirstArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlacementFindFirstArgs>(args?: SelectSubset<T, PlacementFindFirstArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Placement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementFindFirstOrThrowArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlacementFindFirstOrThrowArgs>(args?: SelectSubset<T, PlacementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Placements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Placements
     * const placements = await prisma.placement.findMany()
     * 
     * // Get first 10 Placements
     * const placements = await prisma.placement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placementWithIdOnly = await prisma.placement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlacementFindManyArgs>(args?: SelectSubset<T, PlacementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Placement.
     * @param {PlacementCreateArgs} args - Arguments to create a Placement.
     * @example
     * // Create one Placement
     * const Placement = await prisma.placement.create({
     *   data: {
     *     // ... data to create a Placement
     *   }
     * })
     * 
     */
    create<T extends PlacementCreateArgs>(args: SelectSubset<T, PlacementCreateArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Placements.
     * @param {PlacementCreateManyArgs} args - Arguments to create many Placements.
     * @example
     * // Create many Placements
     * const placement = await prisma.placement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlacementCreateManyArgs>(args?: SelectSubset<T, PlacementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Placements and returns the data saved in the database.
     * @param {PlacementCreateManyAndReturnArgs} args - Arguments to create many Placements.
     * @example
     * // Create many Placements
     * const placement = await prisma.placement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Placements and only return the `id`
     * const placementWithIdOnly = await prisma.placement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlacementCreateManyAndReturnArgs>(args?: SelectSubset<T, PlacementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Placement.
     * @param {PlacementDeleteArgs} args - Arguments to delete one Placement.
     * @example
     * // Delete one Placement
     * const Placement = await prisma.placement.delete({
     *   where: {
     *     // ... filter to delete one Placement
     *   }
     * })
     * 
     */
    delete<T extends PlacementDeleteArgs>(args: SelectSubset<T, PlacementDeleteArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Placement.
     * @param {PlacementUpdateArgs} args - Arguments to update one Placement.
     * @example
     * // Update one Placement
     * const placement = await prisma.placement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlacementUpdateArgs>(args: SelectSubset<T, PlacementUpdateArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Placements.
     * @param {PlacementDeleteManyArgs} args - Arguments to filter Placements to delete.
     * @example
     * // Delete a few Placements
     * const { count } = await prisma.placement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlacementDeleteManyArgs>(args?: SelectSubset<T, PlacementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Placements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Placements
     * const placement = await prisma.placement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlacementUpdateManyArgs>(args: SelectSubset<T, PlacementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Placements and returns the data updated in the database.
     * @param {PlacementUpdateManyAndReturnArgs} args - Arguments to update many Placements.
     * @example
     * // Update many Placements
     * const placement = await prisma.placement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Placements and only return the `id`
     * const placementWithIdOnly = await prisma.placement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlacementUpdateManyAndReturnArgs>(args: SelectSubset<T, PlacementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Placement.
     * @param {PlacementUpsertArgs} args - Arguments to update or create a Placement.
     * @example
     * // Update or create a Placement
     * const placement = await prisma.placement.upsert({
     *   create: {
     *     // ... data to create a Placement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Placement we want to update
     *   }
     * })
     */
    upsert<T extends PlacementUpsertArgs>(args: SelectSubset<T, PlacementUpsertArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Placements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementCountArgs} args - Arguments to filter Placements to count.
     * @example
     * // Count the number of Placements
     * const count = await prisma.placement.count({
     *   where: {
     *     // ... the filter for the Placements we want to count
     *   }
     * })
    **/
    count<T extends PlacementCountArgs>(
      args?: Subset<T, PlacementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Placement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlacementAggregateArgs>(args: Subset<T, PlacementAggregateArgs>): Prisma.PrismaPromise<GetPlacementAggregateType<T>>

    /**
     * Group by Placement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlacementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlacementGroupByArgs['orderBy'] }
        : { orderBy?: PlacementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Placement model
   */
  readonly fields: PlacementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Placement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlacementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Placement model
   */
  interface PlacementFieldRefs {
    readonly id: FieldRef<"Placement", 'String'>
    readonly averagePackage: FieldRef<"Placement", 'Int'>
    readonly highestPackage: FieldRef<"Placement", 'Int'>
    readonly placementPercentage: FieldRef<"Placement", 'Float'>
    readonly topRecruiters: FieldRef<"Placement", 'String'>
    readonly year: FieldRef<"Placement", 'Int'>
    readonly collegeId: FieldRef<"Placement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Placement findUnique
   */
  export type PlacementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement findUniqueOrThrow
   */
  export type PlacementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement findFirst
   */
  export type PlacementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Placements.
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * Placement findFirstOrThrow
   */
  export type PlacementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Placements.
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * Placement findMany
   */
  export type PlacementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placements to fetch.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Placements.
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * Placement create
   */
  export type PlacementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * The data needed to create a Placement.
     */
    data: XOR<PlacementCreateInput, PlacementUncheckedCreateInput>
  }

  /**
   * Placement createMany
   */
  export type PlacementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Placements.
     */
    data: PlacementCreateManyInput | PlacementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Placement createManyAndReturn
   */
  export type PlacementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * The data used to create many Placements.
     */
    data: PlacementCreateManyInput | PlacementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Placement update
   */
  export type PlacementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * The data needed to update a Placement.
     */
    data: XOR<PlacementUpdateInput, PlacementUncheckedUpdateInput>
    /**
     * Choose, which Placement to update.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement updateMany
   */
  export type PlacementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Placements.
     */
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyInput>
    /**
     * Filter which Placements to update
     */
    where?: PlacementWhereInput
    /**
     * Limit how many Placements to update.
     */
    limit?: number
  }

  /**
   * Placement updateManyAndReturn
   */
  export type PlacementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * The data used to update Placements.
     */
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyInput>
    /**
     * Filter which Placements to update
     */
    where?: PlacementWhereInput
    /**
     * Limit how many Placements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Placement upsert
   */
  export type PlacementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * The filter to search for the Placement to update in case it exists.
     */
    where: PlacementWhereUniqueInput
    /**
     * In case the Placement found by the `where` argument doesn't exist, create a new Placement with this data.
     */
    create: XOR<PlacementCreateInput, PlacementUncheckedCreateInput>
    /**
     * In case the Placement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlacementUpdateInput, PlacementUncheckedUpdateInput>
  }

  /**
   * Placement delete
   */
  export type PlacementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter which Placement to delete.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement deleteMany
   */
  export type PlacementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Placements to delete
     */
    where?: PlacementWhereInput
    /**
     * Limit how many Placements to delete.
     */
    limit?: number
  }

  /**
   * Placement without action
   */
  export type PlacementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
  }


  /**
   * Model SavedCollege
   */

  export type AggregateSavedCollege = {
    _count: SavedCollegeCountAggregateOutputType | null
    _min: SavedCollegeMinAggregateOutputType | null
    _max: SavedCollegeMaxAggregateOutputType | null
  }

  export type SavedCollegeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    collegeId: string | null
  }

  export type SavedCollegeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    collegeId: string | null
  }

  export type SavedCollegeCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    collegeId: number
    _all: number
  }


  export type SavedCollegeMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    collegeId?: true
  }

  export type SavedCollegeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    collegeId?: true
  }

  export type SavedCollegeCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    collegeId?: true
    _all?: true
  }

  export type SavedCollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedCollege to aggregate.
     */
    where?: SavedCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedColleges to fetch.
     */
    orderBy?: SavedCollegeOrderByWithRelationInput | SavedCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedColleges
    **/
    _count?: true | SavedCollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedCollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedCollegeMaxAggregateInputType
  }

  export type GetSavedCollegeAggregateType<T extends SavedCollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedCollege[P]>
      : GetScalarType<T[P], AggregateSavedCollege[P]>
  }




  export type SavedCollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCollegeWhereInput
    orderBy?: SavedCollegeOrderByWithAggregationInput | SavedCollegeOrderByWithAggregationInput[]
    by: SavedCollegeScalarFieldEnum[] | SavedCollegeScalarFieldEnum
    having?: SavedCollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedCollegeCountAggregateInputType | true
    _min?: SavedCollegeMinAggregateInputType
    _max?: SavedCollegeMaxAggregateInputType
  }

  export type SavedCollegeGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    collegeId: string
    _count: SavedCollegeCountAggregateOutputType | null
    _min: SavedCollegeMinAggregateOutputType | null
    _max: SavedCollegeMaxAggregateOutputType | null
  }

  type GetSavedCollegeGroupByPayload<T extends SavedCollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedCollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedCollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedCollegeGroupByOutputType[P]>
            : GetScalarType<T[P], SavedCollegeGroupByOutputType[P]>
        }
      >
    >


  export type SavedCollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    collegeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedCollege"]>

  export type SavedCollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    collegeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedCollege"]>

  export type SavedCollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    collegeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedCollege"]>

  export type SavedCollegeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    collegeId?: boolean
  }

  export type SavedCollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "collegeId", ExtArgs["result"]["savedCollege"]>
  export type SavedCollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type SavedCollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type SavedCollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $SavedCollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedCollege"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      collegeId: string
    }, ExtArgs["result"]["savedCollege"]>
    composites: {}
  }

  type SavedCollegeGetPayload<S extends boolean | null | undefined | SavedCollegeDefaultArgs> = $Result.GetResult<Prisma.$SavedCollegePayload, S>

  type SavedCollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedCollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedCollegeCountAggregateInputType | true
    }

  export interface SavedCollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedCollege'], meta: { name: 'SavedCollege' } }
    /**
     * Find zero or one SavedCollege that matches the filter.
     * @param {SavedCollegeFindUniqueArgs} args - Arguments to find a SavedCollege
     * @example
     * // Get one SavedCollege
     * const savedCollege = await prisma.savedCollege.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedCollegeFindUniqueArgs>(args: SelectSubset<T, SavedCollegeFindUniqueArgs<ExtArgs>>): Prisma__SavedCollegeClient<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedCollege that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedCollegeFindUniqueOrThrowArgs} args - Arguments to find a SavedCollege
     * @example
     * // Get one SavedCollege
     * const savedCollege = await prisma.savedCollege.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedCollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedCollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedCollegeClient<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedCollege that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCollegeFindFirstArgs} args - Arguments to find a SavedCollege
     * @example
     * // Get one SavedCollege
     * const savedCollege = await prisma.savedCollege.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedCollegeFindFirstArgs>(args?: SelectSubset<T, SavedCollegeFindFirstArgs<ExtArgs>>): Prisma__SavedCollegeClient<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedCollege that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCollegeFindFirstOrThrowArgs} args - Arguments to find a SavedCollege
     * @example
     * // Get one SavedCollege
     * const savedCollege = await prisma.savedCollege.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedCollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedCollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedCollegeClient<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedColleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedColleges
     * const savedColleges = await prisma.savedCollege.findMany()
     * 
     * // Get first 10 SavedColleges
     * const savedColleges = await prisma.savedCollege.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedCollegeWithIdOnly = await prisma.savedCollege.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedCollegeFindManyArgs>(args?: SelectSubset<T, SavedCollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedCollege.
     * @param {SavedCollegeCreateArgs} args - Arguments to create a SavedCollege.
     * @example
     * // Create one SavedCollege
     * const SavedCollege = await prisma.savedCollege.create({
     *   data: {
     *     // ... data to create a SavedCollege
     *   }
     * })
     * 
     */
    create<T extends SavedCollegeCreateArgs>(args: SelectSubset<T, SavedCollegeCreateArgs<ExtArgs>>): Prisma__SavedCollegeClient<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedColleges.
     * @param {SavedCollegeCreateManyArgs} args - Arguments to create many SavedColleges.
     * @example
     * // Create many SavedColleges
     * const savedCollege = await prisma.savedCollege.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedCollegeCreateManyArgs>(args?: SelectSubset<T, SavedCollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedColleges and returns the data saved in the database.
     * @param {SavedCollegeCreateManyAndReturnArgs} args - Arguments to create many SavedColleges.
     * @example
     * // Create many SavedColleges
     * const savedCollege = await prisma.savedCollege.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedColleges and only return the `id`
     * const savedCollegeWithIdOnly = await prisma.savedCollege.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedCollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedCollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedCollege.
     * @param {SavedCollegeDeleteArgs} args - Arguments to delete one SavedCollege.
     * @example
     * // Delete one SavedCollege
     * const SavedCollege = await prisma.savedCollege.delete({
     *   where: {
     *     // ... filter to delete one SavedCollege
     *   }
     * })
     * 
     */
    delete<T extends SavedCollegeDeleteArgs>(args: SelectSubset<T, SavedCollegeDeleteArgs<ExtArgs>>): Prisma__SavedCollegeClient<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedCollege.
     * @param {SavedCollegeUpdateArgs} args - Arguments to update one SavedCollege.
     * @example
     * // Update one SavedCollege
     * const savedCollege = await prisma.savedCollege.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedCollegeUpdateArgs>(args: SelectSubset<T, SavedCollegeUpdateArgs<ExtArgs>>): Prisma__SavedCollegeClient<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedColleges.
     * @param {SavedCollegeDeleteManyArgs} args - Arguments to filter SavedColleges to delete.
     * @example
     * // Delete a few SavedColleges
     * const { count } = await prisma.savedCollege.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedCollegeDeleteManyArgs>(args?: SelectSubset<T, SavedCollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedColleges
     * const savedCollege = await prisma.savedCollege.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedCollegeUpdateManyArgs>(args: SelectSubset<T, SavedCollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedColleges and returns the data updated in the database.
     * @param {SavedCollegeUpdateManyAndReturnArgs} args - Arguments to update many SavedColleges.
     * @example
     * // Update many SavedColleges
     * const savedCollege = await prisma.savedCollege.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedColleges and only return the `id`
     * const savedCollegeWithIdOnly = await prisma.savedCollege.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedCollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedCollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedCollege.
     * @param {SavedCollegeUpsertArgs} args - Arguments to update or create a SavedCollege.
     * @example
     * // Update or create a SavedCollege
     * const savedCollege = await prisma.savedCollege.upsert({
     *   create: {
     *     // ... data to create a SavedCollege
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedCollege we want to update
     *   }
     * })
     */
    upsert<T extends SavedCollegeUpsertArgs>(args: SelectSubset<T, SavedCollegeUpsertArgs<ExtArgs>>): Prisma__SavedCollegeClient<$Result.GetResult<Prisma.$SavedCollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCollegeCountArgs} args - Arguments to filter SavedColleges to count.
     * @example
     * // Count the number of SavedColleges
     * const count = await prisma.savedCollege.count({
     *   where: {
     *     // ... the filter for the SavedColleges we want to count
     *   }
     * })
    **/
    count<T extends SavedCollegeCountArgs>(
      args?: Subset<T, SavedCollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedCollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedCollegeAggregateArgs>(args: Subset<T, SavedCollegeAggregateArgs>): Prisma.PrismaPromise<GetSavedCollegeAggregateType<T>>

    /**
     * Group by SavedCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCollegeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedCollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedCollegeGroupByArgs['orderBy'] }
        : { orderBy?: SavedCollegeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedCollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedCollege model
   */
  readonly fields: SavedCollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedCollege.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedCollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedCollege model
   */
  interface SavedCollegeFieldRefs {
    readonly id: FieldRef<"SavedCollege", 'String'>
    readonly createdAt: FieldRef<"SavedCollege", 'DateTime'>
    readonly userId: FieldRef<"SavedCollege", 'String'>
    readonly collegeId: FieldRef<"SavedCollege", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavedCollege findUnique
   */
  export type SavedCollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    /**
     * Filter, which SavedCollege to fetch.
     */
    where: SavedCollegeWhereUniqueInput
  }

  /**
   * SavedCollege findUniqueOrThrow
   */
  export type SavedCollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    /**
     * Filter, which SavedCollege to fetch.
     */
    where: SavedCollegeWhereUniqueInput
  }

  /**
   * SavedCollege findFirst
   */
  export type SavedCollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    /**
     * Filter, which SavedCollege to fetch.
     */
    where?: SavedCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedColleges to fetch.
     */
    orderBy?: SavedCollegeOrderByWithRelationInput | SavedCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedColleges.
     */
    cursor?: SavedCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedColleges.
     */
    distinct?: SavedCollegeScalarFieldEnum | SavedCollegeScalarFieldEnum[]
  }

  /**
   * SavedCollege findFirstOrThrow
   */
  export type SavedCollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    /**
     * Filter, which SavedCollege to fetch.
     */
    where?: SavedCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedColleges to fetch.
     */
    orderBy?: SavedCollegeOrderByWithRelationInput | SavedCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedColleges.
     */
    cursor?: SavedCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedColleges.
     */
    distinct?: SavedCollegeScalarFieldEnum | SavedCollegeScalarFieldEnum[]
  }

  /**
   * SavedCollege findMany
   */
  export type SavedCollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    /**
     * Filter, which SavedColleges to fetch.
     */
    where?: SavedCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedColleges to fetch.
     */
    orderBy?: SavedCollegeOrderByWithRelationInput | SavedCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedColleges.
     */
    cursor?: SavedCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedColleges.
     */
    distinct?: SavedCollegeScalarFieldEnum | SavedCollegeScalarFieldEnum[]
  }

  /**
   * SavedCollege create
   */
  export type SavedCollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedCollege.
     */
    data: XOR<SavedCollegeCreateInput, SavedCollegeUncheckedCreateInput>
  }

  /**
   * SavedCollege createMany
   */
  export type SavedCollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedColleges.
     */
    data: SavedCollegeCreateManyInput | SavedCollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedCollege createManyAndReturn
   */
  export type SavedCollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * The data used to create many SavedColleges.
     */
    data: SavedCollegeCreateManyInput | SavedCollegeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedCollege update
   */
  export type SavedCollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedCollege.
     */
    data: XOR<SavedCollegeUpdateInput, SavedCollegeUncheckedUpdateInput>
    /**
     * Choose, which SavedCollege to update.
     */
    where: SavedCollegeWhereUniqueInput
  }

  /**
   * SavedCollege updateMany
   */
  export type SavedCollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedColleges.
     */
    data: XOR<SavedCollegeUpdateManyMutationInput, SavedCollegeUncheckedUpdateManyInput>
    /**
     * Filter which SavedColleges to update
     */
    where?: SavedCollegeWhereInput
    /**
     * Limit how many SavedColleges to update.
     */
    limit?: number
  }

  /**
   * SavedCollege updateManyAndReturn
   */
  export type SavedCollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * The data used to update SavedColleges.
     */
    data: XOR<SavedCollegeUpdateManyMutationInput, SavedCollegeUncheckedUpdateManyInput>
    /**
     * Filter which SavedColleges to update
     */
    where?: SavedCollegeWhereInput
    /**
     * Limit how many SavedColleges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedCollege upsert
   */
  export type SavedCollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedCollege to update in case it exists.
     */
    where: SavedCollegeWhereUniqueInput
    /**
     * In case the SavedCollege found by the `where` argument doesn't exist, create a new SavedCollege with this data.
     */
    create: XOR<SavedCollegeCreateInput, SavedCollegeUncheckedCreateInput>
    /**
     * In case the SavedCollege was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedCollegeUpdateInput, SavedCollegeUncheckedUpdateInput>
  }

  /**
   * SavedCollege delete
   */
  export type SavedCollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
    /**
     * Filter which SavedCollege to delete.
     */
    where: SavedCollegeWhereUniqueInput
  }

  /**
   * SavedCollege deleteMany
   */
  export type SavedCollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedColleges to delete
     */
    where?: SavedCollegeWhereInput
    /**
     * Limit how many SavedColleges to delete.
     */
    limit?: number
  }

  /**
   * SavedCollege without action
   */
  export type SavedCollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCollege
     */
    select?: SavedCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCollege
     */
    omit?: SavedCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCollegeInclude<ExtArgs> | null
  }


  /**
   * Model CompareSession
   */

  export type AggregateCompareSession = {
    _count: CompareSessionCountAggregateOutputType | null
    _min: CompareSessionMinAggregateOutputType | null
    _max: CompareSessionMaxAggregateOutputType | null
  }

  export type CompareSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type CompareSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type CompareSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    _all: number
  }


  export type CompareSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
  }

  export type CompareSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
  }

  export type CompareSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type CompareSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompareSession to aggregate.
     */
    where?: CompareSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessions to fetch.
     */
    orderBy?: CompareSessionOrderByWithRelationInput | CompareSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompareSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompareSessions
    **/
    _count?: true | CompareSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompareSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompareSessionMaxAggregateInputType
  }

  export type GetCompareSessionAggregateType<T extends CompareSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompareSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompareSession[P]>
      : GetScalarType<T[P], AggregateCompareSession[P]>
  }




  export type CompareSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareSessionWhereInput
    orderBy?: CompareSessionOrderByWithAggregationInput | CompareSessionOrderByWithAggregationInput[]
    by: CompareSessionScalarFieldEnum[] | CompareSessionScalarFieldEnum
    having?: CompareSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompareSessionCountAggregateInputType | true
    _min?: CompareSessionMinAggregateInputType
    _max?: CompareSessionMaxAggregateInputType
  }

  export type CompareSessionGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    _count: CompareSessionCountAggregateOutputType | null
    _min: CompareSessionMinAggregateOutputType | null
    _max: CompareSessionMaxAggregateOutputType | null
  }

  type GetCompareSessionGroupByPayload<T extends CompareSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompareSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompareSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompareSessionGroupByOutputType[P]>
            : GetScalarType<T[P], CompareSessionGroupByOutputType[P]>
        }
      >
    >


  export type CompareSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    colleges?: boolean | CompareSession$collegesArgs<ExtArgs>
    _count?: boolean | CompareSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareSession"]>

  export type CompareSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareSession"]>

  export type CompareSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareSession"]>

  export type CompareSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type CompareSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId", ExtArgs["result"]["compareSession"]>
  export type CompareSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    colleges?: boolean | CompareSession$collegesArgs<ExtArgs>
    _count?: boolean | CompareSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompareSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompareSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompareSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompareSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      colleges: Prisma.$CompareSessionCollegePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["compareSession"]>
    composites: {}
  }

  type CompareSessionGetPayload<S extends boolean | null | undefined | CompareSessionDefaultArgs> = $Result.GetResult<Prisma.$CompareSessionPayload, S>

  type CompareSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompareSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompareSessionCountAggregateInputType | true
    }

  export interface CompareSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompareSession'], meta: { name: 'CompareSession' } }
    /**
     * Find zero or one CompareSession that matches the filter.
     * @param {CompareSessionFindUniqueArgs} args - Arguments to find a CompareSession
     * @example
     * // Get one CompareSession
     * const compareSession = await prisma.compareSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompareSessionFindUniqueArgs>(args: SelectSubset<T, CompareSessionFindUniqueArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompareSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompareSessionFindUniqueOrThrowArgs} args - Arguments to find a CompareSession
     * @example
     * // Get one CompareSession
     * const compareSession = await prisma.compareSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompareSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompareSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompareSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionFindFirstArgs} args - Arguments to find a CompareSession
     * @example
     * // Get one CompareSession
     * const compareSession = await prisma.compareSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompareSessionFindFirstArgs>(args?: SelectSubset<T, CompareSessionFindFirstArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompareSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionFindFirstOrThrowArgs} args - Arguments to find a CompareSession
     * @example
     * // Get one CompareSession
     * const compareSession = await prisma.compareSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompareSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompareSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompareSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompareSessions
     * const compareSessions = await prisma.compareSession.findMany()
     * 
     * // Get first 10 CompareSessions
     * const compareSessions = await prisma.compareSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compareSessionWithIdOnly = await prisma.compareSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompareSessionFindManyArgs>(args?: SelectSubset<T, CompareSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompareSession.
     * @param {CompareSessionCreateArgs} args - Arguments to create a CompareSession.
     * @example
     * // Create one CompareSession
     * const CompareSession = await prisma.compareSession.create({
     *   data: {
     *     // ... data to create a CompareSession
     *   }
     * })
     * 
     */
    create<T extends CompareSessionCreateArgs>(args: SelectSubset<T, CompareSessionCreateArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompareSessions.
     * @param {CompareSessionCreateManyArgs} args - Arguments to create many CompareSessions.
     * @example
     * // Create many CompareSessions
     * const compareSession = await prisma.compareSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompareSessionCreateManyArgs>(args?: SelectSubset<T, CompareSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompareSessions and returns the data saved in the database.
     * @param {CompareSessionCreateManyAndReturnArgs} args - Arguments to create many CompareSessions.
     * @example
     * // Create many CompareSessions
     * const compareSession = await prisma.compareSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompareSessions and only return the `id`
     * const compareSessionWithIdOnly = await prisma.compareSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompareSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompareSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompareSession.
     * @param {CompareSessionDeleteArgs} args - Arguments to delete one CompareSession.
     * @example
     * // Delete one CompareSession
     * const CompareSession = await prisma.compareSession.delete({
     *   where: {
     *     // ... filter to delete one CompareSession
     *   }
     * })
     * 
     */
    delete<T extends CompareSessionDeleteArgs>(args: SelectSubset<T, CompareSessionDeleteArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompareSession.
     * @param {CompareSessionUpdateArgs} args - Arguments to update one CompareSession.
     * @example
     * // Update one CompareSession
     * const compareSession = await prisma.compareSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompareSessionUpdateArgs>(args: SelectSubset<T, CompareSessionUpdateArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompareSessions.
     * @param {CompareSessionDeleteManyArgs} args - Arguments to filter CompareSessions to delete.
     * @example
     * // Delete a few CompareSessions
     * const { count } = await prisma.compareSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompareSessionDeleteManyArgs>(args?: SelectSubset<T, CompareSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompareSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompareSessions
     * const compareSession = await prisma.compareSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompareSessionUpdateManyArgs>(args: SelectSubset<T, CompareSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompareSessions and returns the data updated in the database.
     * @param {CompareSessionUpdateManyAndReturnArgs} args - Arguments to update many CompareSessions.
     * @example
     * // Update many CompareSessions
     * const compareSession = await prisma.compareSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompareSessions and only return the `id`
     * const compareSessionWithIdOnly = await prisma.compareSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompareSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompareSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompareSession.
     * @param {CompareSessionUpsertArgs} args - Arguments to update or create a CompareSession.
     * @example
     * // Update or create a CompareSession
     * const compareSession = await prisma.compareSession.upsert({
     *   create: {
     *     // ... data to create a CompareSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompareSession we want to update
     *   }
     * })
     */
    upsert<T extends CompareSessionUpsertArgs>(args: SelectSubset<T, CompareSessionUpsertArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompareSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionCountArgs} args - Arguments to filter CompareSessions to count.
     * @example
     * // Count the number of CompareSessions
     * const count = await prisma.compareSession.count({
     *   where: {
     *     // ... the filter for the CompareSessions we want to count
     *   }
     * })
    **/
    count<T extends CompareSessionCountArgs>(
      args?: Subset<T, CompareSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompareSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompareSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompareSessionAggregateArgs>(args: Subset<T, CompareSessionAggregateArgs>): Prisma.PrismaPromise<GetCompareSessionAggregateType<T>>

    /**
     * Group by CompareSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompareSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompareSessionGroupByArgs['orderBy'] }
        : { orderBy?: CompareSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompareSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompareSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompareSession model
   */
  readonly fields: CompareSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompareSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompareSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colleges<T extends CompareSession$collegesArgs<ExtArgs> = {}>(args?: Subset<T, CompareSession$collegesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompareSession model
   */
  interface CompareSessionFieldRefs {
    readonly id: FieldRef<"CompareSession", 'String'>
    readonly createdAt: FieldRef<"CompareSession", 'DateTime'>
    readonly userId: FieldRef<"CompareSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompareSession findUnique
   */
  export type CompareSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSession to fetch.
     */
    where: CompareSessionWhereUniqueInput
  }

  /**
   * CompareSession findUniqueOrThrow
   */
  export type CompareSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSession to fetch.
     */
    where: CompareSessionWhereUniqueInput
  }

  /**
   * CompareSession findFirst
   */
  export type CompareSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSession to fetch.
     */
    where?: CompareSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessions to fetch.
     */
    orderBy?: CompareSessionOrderByWithRelationInput | CompareSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompareSessions.
     */
    cursor?: CompareSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareSessions.
     */
    distinct?: CompareSessionScalarFieldEnum | CompareSessionScalarFieldEnum[]
  }

  /**
   * CompareSession findFirstOrThrow
   */
  export type CompareSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSession to fetch.
     */
    where?: CompareSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessions to fetch.
     */
    orderBy?: CompareSessionOrderByWithRelationInput | CompareSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompareSessions.
     */
    cursor?: CompareSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareSessions.
     */
    distinct?: CompareSessionScalarFieldEnum | CompareSessionScalarFieldEnum[]
  }

  /**
   * CompareSession findMany
   */
  export type CompareSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSessions to fetch.
     */
    where?: CompareSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessions to fetch.
     */
    orderBy?: CompareSessionOrderByWithRelationInput | CompareSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompareSessions.
     */
    cursor?: CompareSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareSessions.
     */
    distinct?: CompareSessionScalarFieldEnum | CompareSessionScalarFieldEnum[]
  }

  /**
   * CompareSession create
   */
  export type CompareSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a CompareSession.
     */
    data: XOR<CompareSessionCreateInput, CompareSessionUncheckedCreateInput>
  }

  /**
   * CompareSession createMany
   */
  export type CompareSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompareSessions.
     */
    data: CompareSessionCreateManyInput | CompareSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompareSession createManyAndReturn
   */
  export type CompareSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * The data used to create many CompareSessions.
     */
    data: CompareSessionCreateManyInput | CompareSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompareSession update
   */
  export type CompareSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a CompareSession.
     */
    data: XOR<CompareSessionUpdateInput, CompareSessionUncheckedUpdateInput>
    /**
     * Choose, which CompareSession to update.
     */
    where: CompareSessionWhereUniqueInput
  }

  /**
   * CompareSession updateMany
   */
  export type CompareSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompareSessions.
     */
    data: XOR<CompareSessionUpdateManyMutationInput, CompareSessionUncheckedUpdateManyInput>
    /**
     * Filter which CompareSessions to update
     */
    where?: CompareSessionWhereInput
    /**
     * Limit how many CompareSessions to update.
     */
    limit?: number
  }

  /**
   * CompareSession updateManyAndReturn
   */
  export type CompareSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * The data used to update CompareSessions.
     */
    data: XOR<CompareSessionUpdateManyMutationInput, CompareSessionUncheckedUpdateManyInput>
    /**
     * Filter which CompareSessions to update
     */
    where?: CompareSessionWhereInput
    /**
     * Limit how many CompareSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompareSession upsert
   */
  export type CompareSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the CompareSession to update in case it exists.
     */
    where: CompareSessionWhereUniqueInput
    /**
     * In case the CompareSession found by the `where` argument doesn't exist, create a new CompareSession with this data.
     */
    create: XOR<CompareSessionCreateInput, CompareSessionUncheckedCreateInput>
    /**
     * In case the CompareSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompareSessionUpdateInput, CompareSessionUncheckedUpdateInput>
  }

  /**
   * CompareSession delete
   */
  export type CompareSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter which CompareSession to delete.
     */
    where: CompareSessionWhereUniqueInput
  }

  /**
   * CompareSession deleteMany
   */
  export type CompareSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompareSessions to delete
     */
    where?: CompareSessionWhereInput
    /**
     * Limit how many CompareSessions to delete.
     */
    limit?: number
  }

  /**
   * CompareSession.colleges
   */
  export type CompareSession$collegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    where?: CompareSessionCollegeWhereInput
    orderBy?: CompareSessionCollegeOrderByWithRelationInput | CompareSessionCollegeOrderByWithRelationInput[]
    cursor?: CompareSessionCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompareSessionCollegeScalarFieldEnum | CompareSessionCollegeScalarFieldEnum[]
  }

  /**
   * CompareSession without action
   */
  export type CompareSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
  }


  /**
   * Model CompareSessionCollege
   */

  export type AggregateCompareSessionCollege = {
    _count: CompareSessionCollegeCountAggregateOutputType | null
    _min: CompareSessionCollegeMinAggregateOutputType | null
    _max: CompareSessionCollegeMaxAggregateOutputType | null
  }

  export type CompareSessionCollegeMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    collegeId: string | null
  }

  export type CompareSessionCollegeMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    collegeId: string | null
  }

  export type CompareSessionCollegeCountAggregateOutputType = {
    id: number
    sessionId: number
    collegeId: number
    _all: number
  }


  export type CompareSessionCollegeMinAggregateInputType = {
    id?: true
    sessionId?: true
    collegeId?: true
  }

  export type CompareSessionCollegeMaxAggregateInputType = {
    id?: true
    sessionId?: true
    collegeId?: true
  }

  export type CompareSessionCollegeCountAggregateInputType = {
    id?: true
    sessionId?: true
    collegeId?: true
    _all?: true
  }

  export type CompareSessionCollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompareSessionCollege to aggregate.
     */
    where?: CompareSessionCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessionColleges to fetch.
     */
    orderBy?: CompareSessionCollegeOrderByWithRelationInput | CompareSessionCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompareSessionCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessionColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessionColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompareSessionColleges
    **/
    _count?: true | CompareSessionCollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompareSessionCollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompareSessionCollegeMaxAggregateInputType
  }

  export type GetCompareSessionCollegeAggregateType<T extends CompareSessionCollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateCompareSessionCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompareSessionCollege[P]>
      : GetScalarType<T[P], AggregateCompareSessionCollege[P]>
  }




  export type CompareSessionCollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareSessionCollegeWhereInput
    orderBy?: CompareSessionCollegeOrderByWithAggregationInput | CompareSessionCollegeOrderByWithAggregationInput[]
    by: CompareSessionCollegeScalarFieldEnum[] | CompareSessionCollegeScalarFieldEnum
    having?: CompareSessionCollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompareSessionCollegeCountAggregateInputType | true
    _min?: CompareSessionCollegeMinAggregateInputType
    _max?: CompareSessionCollegeMaxAggregateInputType
  }

  export type CompareSessionCollegeGroupByOutputType = {
    id: string
    sessionId: string
    collegeId: string
    _count: CompareSessionCollegeCountAggregateOutputType | null
    _min: CompareSessionCollegeMinAggregateOutputType | null
    _max: CompareSessionCollegeMaxAggregateOutputType | null
  }

  type GetCompareSessionCollegeGroupByPayload<T extends CompareSessionCollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompareSessionCollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompareSessionCollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompareSessionCollegeGroupByOutputType[P]>
            : GetScalarType<T[P], CompareSessionCollegeGroupByOutputType[P]>
        }
      >
    >


  export type CompareSessionCollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    collegeId?: boolean
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareSessionCollege"]>

  export type CompareSessionCollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    collegeId?: boolean
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareSessionCollege"]>

  export type CompareSessionCollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    collegeId?: boolean
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareSessionCollege"]>

  export type CompareSessionCollegeSelectScalar = {
    id?: boolean
    sessionId?: boolean
    collegeId?: boolean
  }

  export type CompareSessionCollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "collegeId", ExtArgs["result"]["compareSessionCollege"]>
  export type CompareSessionCollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type CompareSessionCollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type CompareSessionCollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $CompareSessionCollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompareSessionCollege"
    objects: {
      session: Prisma.$CompareSessionPayload<ExtArgs>
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      collegeId: string
    }, ExtArgs["result"]["compareSessionCollege"]>
    composites: {}
  }

  type CompareSessionCollegeGetPayload<S extends boolean | null | undefined | CompareSessionCollegeDefaultArgs> = $Result.GetResult<Prisma.$CompareSessionCollegePayload, S>

  type CompareSessionCollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompareSessionCollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompareSessionCollegeCountAggregateInputType | true
    }

  export interface CompareSessionCollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompareSessionCollege'], meta: { name: 'CompareSessionCollege' } }
    /**
     * Find zero or one CompareSessionCollege that matches the filter.
     * @param {CompareSessionCollegeFindUniqueArgs} args - Arguments to find a CompareSessionCollege
     * @example
     * // Get one CompareSessionCollege
     * const compareSessionCollege = await prisma.compareSessionCollege.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompareSessionCollegeFindUniqueArgs>(args: SelectSubset<T, CompareSessionCollegeFindUniqueArgs<ExtArgs>>): Prisma__CompareSessionCollegeClient<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompareSessionCollege that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompareSessionCollegeFindUniqueOrThrowArgs} args - Arguments to find a CompareSessionCollege
     * @example
     * // Get one CompareSessionCollege
     * const compareSessionCollege = await prisma.compareSessionCollege.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompareSessionCollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, CompareSessionCollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompareSessionCollegeClient<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompareSessionCollege that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionCollegeFindFirstArgs} args - Arguments to find a CompareSessionCollege
     * @example
     * // Get one CompareSessionCollege
     * const compareSessionCollege = await prisma.compareSessionCollege.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompareSessionCollegeFindFirstArgs>(args?: SelectSubset<T, CompareSessionCollegeFindFirstArgs<ExtArgs>>): Prisma__CompareSessionCollegeClient<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompareSessionCollege that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionCollegeFindFirstOrThrowArgs} args - Arguments to find a CompareSessionCollege
     * @example
     * // Get one CompareSessionCollege
     * const compareSessionCollege = await prisma.compareSessionCollege.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompareSessionCollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, CompareSessionCollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompareSessionCollegeClient<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompareSessionColleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionCollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompareSessionColleges
     * const compareSessionColleges = await prisma.compareSessionCollege.findMany()
     * 
     * // Get first 10 CompareSessionColleges
     * const compareSessionColleges = await prisma.compareSessionCollege.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compareSessionCollegeWithIdOnly = await prisma.compareSessionCollege.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompareSessionCollegeFindManyArgs>(args?: SelectSubset<T, CompareSessionCollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompareSessionCollege.
     * @param {CompareSessionCollegeCreateArgs} args - Arguments to create a CompareSessionCollege.
     * @example
     * // Create one CompareSessionCollege
     * const CompareSessionCollege = await prisma.compareSessionCollege.create({
     *   data: {
     *     // ... data to create a CompareSessionCollege
     *   }
     * })
     * 
     */
    create<T extends CompareSessionCollegeCreateArgs>(args: SelectSubset<T, CompareSessionCollegeCreateArgs<ExtArgs>>): Prisma__CompareSessionCollegeClient<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompareSessionColleges.
     * @param {CompareSessionCollegeCreateManyArgs} args - Arguments to create many CompareSessionColleges.
     * @example
     * // Create many CompareSessionColleges
     * const compareSessionCollege = await prisma.compareSessionCollege.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompareSessionCollegeCreateManyArgs>(args?: SelectSubset<T, CompareSessionCollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompareSessionColleges and returns the data saved in the database.
     * @param {CompareSessionCollegeCreateManyAndReturnArgs} args - Arguments to create many CompareSessionColleges.
     * @example
     * // Create many CompareSessionColleges
     * const compareSessionCollege = await prisma.compareSessionCollege.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompareSessionColleges and only return the `id`
     * const compareSessionCollegeWithIdOnly = await prisma.compareSessionCollege.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompareSessionCollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, CompareSessionCollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompareSessionCollege.
     * @param {CompareSessionCollegeDeleteArgs} args - Arguments to delete one CompareSessionCollege.
     * @example
     * // Delete one CompareSessionCollege
     * const CompareSessionCollege = await prisma.compareSessionCollege.delete({
     *   where: {
     *     // ... filter to delete one CompareSessionCollege
     *   }
     * })
     * 
     */
    delete<T extends CompareSessionCollegeDeleteArgs>(args: SelectSubset<T, CompareSessionCollegeDeleteArgs<ExtArgs>>): Prisma__CompareSessionCollegeClient<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompareSessionCollege.
     * @param {CompareSessionCollegeUpdateArgs} args - Arguments to update one CompareSessionCollege.
     * @example
     * // Update one CompareSessionCollege
     * const compareSessionCollege = await prisma.compareSessionCollege.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompareSessionCollegeUpdateArgs>(args: SelectSubset<T, CompareSessionCollegeUpdateArgs<ExtArgs>>): Prisma__CompareSessionCollegeClient<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompareSessionColleges.
     * @param {CompareSessionCollegeDeleteManyArgs} args - Arguments to filter CompareSessionColleges to delete.
     * @example
     * // Delete a few CompareSessionColleges
     * const { count } = await prisma.compareSessionCollege.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompareSessionCollegeDeleteManyArgs>(args?: SelectSubset<T, CompareSessionCollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompareSessionColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionCollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompareSessionColleges
     * const compareSessionCollege = await prisma.compareSessionCollege.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompareSessionCollegeUpdateManyArgs>(args: SelectSubset<T, CompareSessionCollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompareSessionColleges and returns the data updated in the database.
     * @param {CompareSessionCollegeUpdateManyAndReturnArgs} args - Arguments to update many CompareSessionColleges.
     * @example
     * // Update many CompareSessionColleges
     * const compareSessionCollege = await prisma.compareSessionCollege.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompareSessionColleges and only return the `id`
     * const compareSessionCollegeWithIdOnly = await prisma.compareSessionCollege.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompareSessionCollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, CompareSessionCollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompareSessionCollege.
     * @param {CompareSessionCollegeUpsertArgs} args - Arguments to update or create a CompareSessionCollege.
     * @example
     * // Update or create a CompareSessionCollege
     * const compareSessionCollege = await prisma.compareSessionCollege.upsert({
     *   create: {
     *     // ... data to create a CompareSessionCollege
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompareSessionCollege we want to update
     *   }
     * })
     */
    upsert<T extends CompareSessionCollegeUpsertArgs>(args: SelectSubset<T, CompareSessionCollegeUpsertArgs<ExtArgs>>): Prisma__CompareSessionCollegeClient<$Result.GetResult<Prisma.$CompareSessionCollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompareSessionColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionCollegeCountArgs} args - Arguments to filter CompareSessionColleges to count.
     * @example
     * // Count the number of CompareSessionColleges
     * const count = await prisma.compareSessionCollege.count({
     *   where: {
     *     // ... the filter for the CompareSessionColleges we want to count
     *   }
     * })
    **/
    count<T extends CompareSessionCollegeCountArgs>(
      args?: Subset<T, CompareSessionCollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompareSessionCollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompareSessionCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionCollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompareSessionCollegeAggregateArgs>(args: Subset<T, CompareSessionCollegeAggregateArgs>): Prisma.PrismaPromise<GetCompareSessionCollegeAggregateType<T>>

    /**
     * Group by CompareSessionCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionCollegeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompareSessionCollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompareSessionCollegeGroupByArgs['orderBy'] }
        : { orderBy?: CompareSessionCollegeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompareSessionCollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompareSessionCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompareSessionCollege model
   */
  readonly fields: CompareSessionCollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompareSessionCollege.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompareSessionCollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends CompareSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompareSessionDefaultArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompareSessionCollege model
   */
  interface CompareSessionCollegeFieldRefs {
    readonly id: FieldRef<"CompareSessionCollege", 'String'>
    readonly sessionId: FieldRef<"CompareSessionCollege", 'String'>
    readonly collegeId: FieldRef<"CompareSessionCollege", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompareSessionCollege findUnique
   */
  export type CompareSessionCollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    /**
     * Filter, which CompareSessionCollege to fetch.
     */
    where: CompareSessionCollegeWhereUniqueInput
  }

  /**
   * CompareSessionCollege findUniqueOrThrow
   */
  export type CompareSessionCollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    /**
     * Filter, which CompareSessionCollege to fetch.
     */
    where: CompareSessionCollegeWhereUniqueInput
  }

  /**
   * CompareSessionCollege findFirst
   */
  export type CompareSessionCollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    /**
     * Filter, which CompareSessionCollege to fetch.
     */
    where?: CompareSessionCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessionColleges to fetch.
     */
    orderBy?: CompareSessionCollegeOrderByWithRelationInput | CompareSessionCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompareSessionColleges.
     */
    cursor?: CompareSessionCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessionColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessionColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareSessionColleges.
     */
    distinct?: CompareSessionCollegeScalarFieldEnum | CompareSessionCollegeScalarFieldEnum[]
  }

  /**
   * CompareSessionCollege findFirstOrThrow
   */
  export type CompareSessionCollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    /**
     * Filter, which CompareSessionCollege to fetch.
     */
    where?: CompareSessionCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessionColleges to fetch.
     */
    orderBy?: CompareSessionCollegeOrderByWithRelationInput | CompareSessionCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompareSessionColleges.
     */
    cursor?: CompareSessionCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessionColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessionColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareSessionColleges.
     */
    distinct?: CompareSessionCollegeScalarFieldEnum | CompareSessionCollegeScalarFieldEnum[]
  }

  /**
   * CompareSessionCollege findMany
   */
  export type CompareSessionCollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    /**
     * Filter, which CompareSessionColleges to fetch.
     */
    where?: CompareSessionCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessionColleges to fetch.
     */
    orderBy?: CompareSessionCollegeOrderByWithRelationInput | CompareSessionCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompareSessionColleges.
     */
    cursor?: CompareSessionCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessionColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessionColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareSessionColleges.
     */
    distinct?: CompareSessionCollegeScalarFieldEnum | CompareSessionCollegeScalarFieldEnum[]
  }

  /**
   * CompareSessionCollege create
   */
  export type CompareSessionCollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a CompareSessionCollege.
     */
    data: XOR<CompareSessionCollegeCreateInput, CompareSessionCollegeUncheckedCreateInput>
  }

  /**
   * CompareSessionCollege createMany
   */
  export type CompareSessionCollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompareSessionColleges.
     */
    data: CompareSessionCollegeCreateManyInput | CompareSessionCollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompareSessionCollege createManyAndReturn
   */
  export type CompareSessionCollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * The data used to create many CompareSessionColleges.
     */
    data: CompareSessionCollegeCreateManyInput | CompareSessionCollegeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompareSessionCollege update
   */
  export type CompareSessionCollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a CompareSessionCollege.
     */
    data: XOR<CompareSessionCollegeUpdateInput, CompareSessionCollegeUncheckedUpdateInput>
    /**
     * Choose, which CompareSessionCollege to update.
     */
    where: CompareSessionCollegeWhereUniqueInput
  }

  /**
   * CompareSessionCollege updateMany
   */
  export type CompareSessionCollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompareSessionColleges.
     */
    data: XOR<CompareSessionCollegeUpdateManyMutationInput, CompareSessionCollegeUncheckedUpdateManyInput>
    /**
     * Filter which CompareSessionColleges to update
     */
    where?: CompareSessionCollegeWhereInput
    /**
     * Limit how many CompareSessionColleges to update.
     */
    limit?: number
  }

  /**
   * CompareSessionCollege updateManyAndReturn
   */
  export type CompareSessionCollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * The data used to update CompareSessionColleges.
     */
    data: XOR<CompareSessionCollegeUpdateManyMutationInput, CompareSessionCollegeUncheckedUpdateManyInput>
    /**
     * Filter which CompareSessionColleges to update
     */
    where?: CompareSessionCollegeWhereInput
    /**
     * Limit how many CompareSessionColleges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompareSessionCollege upsert
   */
  export type CompareSessionCollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the CompareSessionCollege to update in case it exists.
     */
    where: CompareSessionCollegeWhereUniqueInput
    /**
     * In case the CompareSessionCollege found by the `where` argument doesn't exist, create a new CompareSessionCollege with this data.
     */
    create: XOR<CompareSessionCollegeCreateInput, CompareSessionCollegeUncheckedCreateInput>
    /**
     * In case the CompareSessionCollege was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompareSessionCollegeUpdateInput, CompareSessionCollegeUncheckedUpdateInput>
  }

  /**
   * CompareSessionCollege delete
   */
  export type CompareSessionCollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
    /**
     * Filter which CompareSessionCollege to delete.
     */
    where: CompareSessionCollegeWhereUniqueInput
  }

  /**
   * CompareSessionCollege deleteMany
   */
  export type CompareSessionCollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompareSessionColleges to delete
     */
    where?: CompareSessionCollegeWhereInput
    /**
     * Limit how many CompareSessionColleges to delete.
     */
    limit?: number
  }

  /**
   * CompareSessionCollege without action
   */
  export type CompareSessionCollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCollege
     */
    select?: CompareSessionCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSessionCollege
     */
    omit?: CompareSessionCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionCollegeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CollegeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    location: 'location',
    state: 'state',
    type: 'type',
    rating: 'rating',
    totalFees: 'totalFees',
    establishedYear: 'establishedYear',
    imageUrl: 'imageUrl',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollegeScalarFieldEnum = (typeof CollegeScalarFieldEnum)[keyof typeof CollegeScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    duration: 'duration',
    fees: 'fees',
    description: 'description',
    collegeId: 'collegeId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const PlacementScalarFieldEnum: {
    id: 'id',
    averagePackage: 'averagePackage',
    highestPackage: 'highestPackage',
    placementPercentage: 'placementPercentage',
    topRecruiters: 'topRecruiters',
    year: 'year',
    collegeId: 'collegeId'
  };

  export type PlacementScalarFieldEnum = (typeof PlacementScalarFieldEnum)[keyof typeof PlacementScalarFieldEnum]


  export const SavedCollegeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    collegeId: 'collegeId'
  };

  export type SavedCollegeScalarFieldEnum = (typeof SavedCollegeScalarFieldEnum)[keyof typeof SavedCollegeScalarFieldEnum]


  export const CompareSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type CompareSessionScalarFieldEnum = (typeof CompareSessionScalarFieldEnum)[keyof typeof CompareSessionScalarFieldEnum]


  export const CompareSessionCollegeScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    collegeId: 'collegeId'
  };

  export type CompareSessionCollegeScalarFieldEnum = (typeof CompareSessionCollegeScalarFieldEnum)[keyof typeof CompareSessionCollegeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CollegeType'
   */
  export type EnumCollegeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollegeType'>
    


  /**
   * Reference to a field of type 'CollegeType[]'
   */
  export type ListEnumCollegeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollegeType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    savedColleges?: SavedCollegeListRelationFilter
    compareSessions?: CompareSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    savedColleges?: SavedCollegeOrderByRelationAggregateInput
    compareSessions?: CompareSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    savedColleges?: SavedCollegeListRelationFilter
    compareSessions?: CompareSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CollegeWhereInput = {
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    id?: StringFilter<"College"> | string
    name?: StringFilter<"College"> | string
    description?: StringNullableFilter<"College"> | string | null
    location?: StringFilter<"College"> | string
    state?: StringFilter<"College"> | string
    type?: EnumCollegeTypeFilter<"College"> | $Enums.CollegeType
    rating?: FloatFilter<"College"> | number
    totalFees?: IntFilter<"College"> | number
    establishedYear?: IntFilter<"College"> | number
    imageUrl?: StringNullableFilter<"College"> | string | null
    website?: StringNullableFilter<"College"> | string | null
    createdAt?: DateTimeFilter<"College"> | Date | string
    updatedAt?: DateTimeFilter<"College"> | Date | string
    courses?: CourseListRelationFilter
    placements?: PlacementListRelationFilter
    savedBy?: SavedCollegeListRelationFilter
    compareSessions?: CompareSessionCollegeListRelationFilter
  }

  export type CollegeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    state?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    totalFees?: SortOrder
    establishedYear?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
    placements?: PlacementOrderByRelationAggregateInput
    savedBy?: SavedCollegeOrderByRelationAggregateInput
    compareSessions?: CompareSessionCollegeOrderByRelationAggregateInput
  }

  export type CollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    description?: StringNullableFilter<"College"> | string | null
    location?: StringFilter<"College"> | string
    state?: StringFilter<"College"> | string
    type?: EnumCollegeTypeFilter<"College"> | $Enums.CollegeType
    rating?: FloatFilter<"College"> | number
    totalFees?: IntFilter<"College"> | number
    establishedYear?: IntFilter<"College"> | number
    imageUrl?: StringNullableFilter<"College"> | string | null
    website?: StringNullableFilter<"College"> | string | null
    createdAt?: DateTimeFilter<"College"> | Date | string
    updatedAt?: DateTimeFilter<"College"> | Date | string
    courses?: CourseListRelationFilter
    placements?: PlacementListRelationFilter
    savedBy?: SavedCollegeListRelationFilter
    compareSessions?: CompareSessionCollegeListRelationFilter
  }, "id" | "name">

  export type CollegeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    state?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    totalFees?: SortOrder
    establishedYear?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollegeCountOrderByAggregateInput
    _avg?: CollegeAvgOrderByAggregateInput
    _max?: CollegeMaxOrderByAggregateInput
    _min?: CollegeMinOrderByAggregateInput
    _sum?: CollegeSumOrderByAggregateInput
  }

  export type CollegeScalarWhereWithAggregatesInput = {
    AND?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    OR?: CollegeScalarWhereWithAggregatesInput[]
    NOT?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"College"> | string
    name?: StringWithAggregatesFilter<"College"> | string
    description?: StringNullableWithAggregatesFilter<"College"> | string | null
    location?: StringWithAggregatesFilter<"College"> | string
    state?: StringWithAggregatesFilter<"College"> | string
    type?: EnumCollegeTypeWithAggregatesFilter<"College"> | $Enums.CollegeType
    rating?: FloatWithAggregatesFilter<"College"> | number
    totalFees?: IntWithAggregatesFilter<"College"> | number
    establishedYear?: IntWithAggregatesFilter<"College"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"College"> | string | null
    website?: StringNullableWithAggregatesFilter<"College"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"College"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"College"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    duration?: StringFilter<"Course"> | string
    fees?: IntFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    collegeId?: StringFilter<"Course"> | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    fees?: SortOrder
    description?: SortOrderInput | SortOrder
    collegeId?: SortOrder
    college?: CollegeOrderByWithRelationInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    duration?: StringFilter<"Course"> | string
    fees?: IntFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    collegeId?: StringFilter<"Course"> | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    fees?: SortOrder
    description?: SortOrderInput | SortOrder
    collegeId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    duration?: StringWithAggregatesFilter<"Course"> | string
    fees?: IntWithAggregatesFilter<"Course"> | number
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    collegeId?: StringWithAggregatesFilter<"Course"> | string
  }

  export type PlacementWhereInput = {
    AND?: PlacementWhereInput | PlacementWhereInput[]
    OR?: PlacementWhereInput[]
    NOT?: PlacementWhereInput | PlacementWhereInput[]
    id?: StringFilter<"Placement"> | string
    averagePackage?: IntFilter<"Placement"> | number
    highestPackage?: IntFilter<"Placement"> | number
    placementPercentage?: FloatFilter<"Placement"> | number
    topRecruiters?: StringFilter<"Placement"> | string
    year?: IntFilter<"Placement"> | number
    collegeId?: StringFilter<"Placement"> | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type PlacementOrderByWithRelationInput = {
    id?: SortOrder
    averagePackage?: SortOrder
    highestPackage?: SortOrder
    placementPercentage?: SortOrder
    topRecruiters?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
    college?: CollegeOrderByWithRelationInput
  }

  export type PlacementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlacementWhereInput | PlacementWhereInput[]
    OR?: PlacementWhereInput[]
    NOT?: PlacementWhereInput | PlacementWhereInput[]
    averagePackage?: IntFilter<"Placement"> | number
    highestPackage?: IntFilter<"Placement"> | number
    placementPercentage?: FloatFilter<"Placement"> | number
    topRecruiters?: StringFilter<"Placement"> | string
    year?: IntFilter<"Placement"> | number
    collegeId?: StringFilter<"Placement"> | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id">

  export type PlacementOrderByWithAggregationInput = {
    id?: SortOrder
    averagePackage?: SortOrder
    highestPackage?: SortOrder
    placementPercentage?: SortOrder
    topRecruiters?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
    _count?: PlacementCountOrderByAggregateInput
    _avg?: PlacementAvgOrderByAggregateInput
    _max?: PlacementMaxOrderByAggregateInput
    _min?: PlacementMinOrderByAggregateInput
    _sum?: PlacementSumOrderByAggregateInput
  }

  export type PlacementScalarWhereWithAggregatesInput = {
    AND?: PlacementScalarWhereWithAggregatesInput | PlacementScalarWhereWithAggregatesInput[]
    OR?: PlacementScalarWhereWithAggregatesInput[]
    NOT?: PlacementScalarWhereWithAggregatesInput | PlacementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Placement"> | string
    averagePackage?: IntWithAggregatesFilter<"Placement"> | number
    highestPackage?: IntWithAggregatesFilter<"Placement"> | number
    placementPercentage?: FloatWithAggregatesFilter<"Placement"> | number
    topRecruiters?: StringWithAggregatesFilter<"Placement"> | string
    year?: IntWithAggregatesFilter<"Placement"> | number
    collegeId?: StringWithAggregatesFilter<"Placement"> | string
  }

  export type SavedCollegeWhereInput = {
    AND?: SavedCollegeWhereInput | SavedCollegeWhereInput[]
    OR?: SavedCollegeWhereInput[]
    NOT?: SavedCollegeWhereInput | SavedCollegeWhereInput[]
    id?: StringFilter<"SavedCollege"> | string
    createdAt?: DateTimeFilter<"SavedCollege"> | Date | string
    userId?: StringFilter<"SavedCollege"> | string
    collegeId?: StringFilter<"SavedCollege"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type SavedCollegeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
    user?: UserOrderByWithRelationInput
    college?: CollegeOrderByWithRelationInput
  }

  export type SavedCollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_collegeId?: SavedCollegeUserIdCollegeIdCompoundUniqueInput
    AND?: SavedCollegeWhereInput | SavedCollegeWhereInput[]
    OR?: SavedCollegeWhereInput[]
    NOT?: SavedCollegeWhereInput | SavedCollegeWhereInput[]
    createdAt?: DateTimeFilter<"SavedCollege"> | Date | string
    userId?: StringFilter<"SavedCollege"> | string
    collegeId?: StringFilter<"SavedCollege"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id" | "userId_collegeId">

  export type SavedCollegeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
    _count?: SavedCollegeCountOrderByAggregateInput
    _max?: SavedCollegeMaxOrderByAggregateInput
    _min?: SavedCollegeMinOrderByAggregateInput
  }

  export type SavedCollegeScalarWhereWithAggregatesInput = {
    AND?: SavedCollegeScalarWhereWithAggregatesInput | SavedCollegeScalarWhereWithAggregatesInput[]
    OR?: SavedCollegeScalarWhereWithAggregatesInput[]
    NOT?: SavedCollegeScalarWhereWithAggregatesInput | SavedCollegeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedCollege"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedCollege"> | Date | string
    userId?: StringWithAggregatesFilter<"SavedCollege"> | string
    collegeId?: StringWithAggregatesFilter<"SavedCollege"> | string
  }

  export type CompareSessionWhereInput = {
    AND?: CompareSessionWhereInput | CompareSessionWhereInput[]
    OR?: CompareSessionWhereInput[]
    NOT?: CompareSessionWhereInput | CompareSessionWhereInput[]
    id?: StringFilter<"CompareSession"> | string
    createdAt?: DateTimeFilter<"CompareSession"> | Date | string
    userId?: StringFilter<"CompareSession"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    colleges?: CompareSessionCollegeListRelationFilter
  }

  export type CompareSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    colleges?: CompareSessionCollegeOrderByRelationAggregateInput
  }

  export type CompareSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompareSessionWhereInput | CompareSessionWhereInput[]
    OR?: CompareSessionWhereInput[]
    NOT?: CompareSessionWhereInput | CompareSessionWhereInput[]
    createdAt?: DateTimeFilter<"CompareSession"> | Date | string
    userId?: StringFilter<"CompareSession"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    colleges?: CompareSessionCollegeListRelationFilter
  }, "id">

  export type CompareSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: CompareSessionCountOrderByAggregateInput
    _max?: CompareSessionMaxOrderByAggregateInput
    _min?: CompareSessionMinOrderByAggregateInput
  }

  export type CompareSessionScalarWhereWithAggregatesInput = {
    AND?: CompareSessionScalarWhereWithAggregatesInput | CompareSessionScalarWhereWithAggregatesInput[]
    OR?: CompareSessionScalarWhereWithAggregatesInput[]
    NOT?: CompareSessionScalarWhereWithAggregatesInput | CompareSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompareSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CompareSession"> | Date | string
    userId?: StringWithAggregatesFilter<"CompareSession"> | string
  }

  export type CompareSessionCollegeWhereInput = {
    AND?: CompareSessionCollegeWhereInput | CompareSessionCollegeWhereInput[]
    OR?: CompareSessionCollegeWhereInput[]
    NOT?: CompareSessionCollegeWhereInput | CompareSessionCollegeWhereInput[]
    id?: StringFilter<"CompareSessionCollege"> | string
    sessionId?: StringFilter<"CompareSessionCollege"> | string
    collegeId?: StringFilter<"CompareSessionCollege"> | string
    session?: XOR<CompareSessionScalarRelationFilter, CompareSessionWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type CompareSessionCollegeOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    collegeId?: SortOrder
    session?: CompareSessionOrderByWithRelationInput
    college?: CollegeOrderByWithRelationInput
  }

  export type CompareSessionCollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId_collegeId?: CompareSessionCollegeSessionIdCollegeIdCompoundUniqueInput
    AND?: CompareSessionCollegeWhereInput | CompareSessionCollegeWhereInput[]
    OR?: CompareSessionCollegeWhereInput[]
    NOT?: CompareSessionCollegeWhereInput | CompareSessionCollegeWhereInput[]
    sessionId?: StringFilter<"CompareSessionCollege"> | string
    collegeId?: StringFilter<"CompareSessionCollege"> | string
    session?: XOR<CompareSessionScalarRelationFilter, CompareSessionWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id" | "sessionId_collegeId">

  export type CompareSessionCollegeOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    collegeId?: SortOrder
    _count?: CompareSessionCollegeCountOrderByAggregateInput
    _max?: CompareSessionCollegeMaxOrderByAggregateInput
    _min?: CompareSessionCollegeMinOrderByAggregateInput
  }

  export type CompareSessionCollegeScalarWhereWithAggregatesInput = {
    AND?: CompareSessionCollegeScalarWhereWithAggregatesInput | CompareSessionCollegeScalarWhereWithAggregatesInput[]
    OR?: CompareSessionCollegeScalarWhereWithAggregatesInput[]
    NOT?: CompareSessionCollegeScalarWhereWithAggregatesInput | CompareSessionCollegeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompareSessionCollege"> | string
    sessionId?: StringWithAggregatesFilter<"CompareSessionCollege"> | string
    collegeId?: StringWithAggregatesFilter<"CompareSessionCollege"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedColleges?: SavedCollegeCreateNestedManyWithoutUserInput
    compareSessions?: CompareSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedColleges?: SavedCollegeUncheckedCreateNestedManyWithoutUserInput
    compareSessions?: CompareSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedColleges?: SavedCollegeUpdateManyWithoutUserNestedInput
    compareSessions?: CompareSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedColleges?: SavedCollegeUncheckedUpdateManyWithoutUserNestedInput
    compareSessions?: CompareSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeCreateInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCollegeInput
    placements?: PlacementCreateNestedManyWithoutCollegeInput
    savedBy?: SavedCollegeCreateNestedManyWithoutCollegeInput
    compareSessions?: CompareSessionCollegeCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCollegeInput
    placements?: PlacementUncheckedCreateNestedManyWithoutCollegeInput
    savedBy?: SavedCollegeUncheckedCreateNestedManyWithoutCollegeInput
    compareSessions?: CompareSessionCollegeUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCollegeNestedInput
    placements?: PlacementUpdateManyWithoutCollegeNestedInput
    savedBy?: SavedCollegeUpdateManyWithoutCollegeNestedInput
    compareSessions?: CompareSessionCollegeUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCollegeNestedInput
    placements?: PlacementUncheckedUpdateManyWithoutCollegeNestedInput
    savedBy?: SavedCollegeUncheckedUpdateManyWithoutCollegeNestedInput
    compareSessions?: CompareSessionCollegeUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollegeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    duration: string
    fees: number
    description?: string | null
    college: CollegeCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    duration: string
    fees: number
    description?: string | null
    collegeId: string
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    fees?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    college?: CollegeUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    fees?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    duration: string
    fees: number
    description?: string | null
    collegeId: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    fees?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    fees?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type PlacementCreateInput = {
    id?: string
    averagePackage: number
    highestPackage: number
    placementPercentage: number
    topRecruiters: string
    year: number
    college: CollegeCreateNestedOneWithoutPlacementsInput
  }

  export type PlacementUncheckedCreateInput = {
    id?: string
    averagePackage: number
    highestPackage: number
    placementPercentage: number
    topRecruiters: string
    year: number
    collegeId: string
  }

  export type PlacementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    averagePackage?: IntFieldUpdateOperationsInput | number
    highestPackage?: IntFieldUpdateOperationsInput | number
    placementPercentage?: FloatFieldUpdateOperationsInput | number
    topRecruiters?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    college?: CollegeUpdateOneRequiredWithoutPlacementsNestedInput
  }

  export type PlacementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    averagePackage?: IntFieldUpdateOperationsInput | number
    highestPackage?: IntFieldUpdateOperationsInput | number
    placementPercentage?: FloatFieldUpdateOperationsInput | number
    topRecruiters?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type PlacementCreateManyInput = {
    id?: string
    averagePackage: number
    highestPackage: number
    placementPercentage: number
    topRecruiters: string
    year: number
    collegeId: string
  }

  export type PlacementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    averagePackage?: IntFieldUpdateOperationsInput | number
    highestPackage?: IntFieldUpdateOperationsInput | number
    placementPercentage?: FloatFieldUpdateOperationsInput | number
    topRecruiters?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlacementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    averagePackage?: IntFieldUpdateOperationsInput | number
    highestPackage?: IntFieldUpdateOperationsInput | number
    placementPercentage?: FloatFieldUpdateOperationsInput | number
    topRecruiters?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedCollegeCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedCollegesInput
    college: CollegeCreateNestedOneWithoutSavedByInput
  }

  export type SavedCollegeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    collegeId: string
  }

  export type SavedCollegeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedCollegesNestedInput
    college?: CollegeUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedCollegeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedCollegeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    collegeId: string
  }

  export type SavedCollegeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCollegeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type CompareSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCompareSessionsInput
    colleges?: CompareSessionCollegeCreateNestedManyWithoutSessionInput
  }

  export type CompareSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    colleges?: CompareSessionCollegeUncheckedCreateNestedManyWithoutSessionInput
  }

  export type CompareSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompareSessionsNestedInput
    colleges?: CompareSessionCollegeUpdateManyWithoutSessionNestedInput
  }

  export type CompareSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    colleges?: CompareSessionCollegeUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type CompareSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type CompareSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompareSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CompareSessionCollegeCreateInput = {
    id?: string
    session: CompareSessionCreateNestedOneWithoutCollegesInput
    college: CollegeCreateNestedOneWithoutCompareSessionsInput
  }

  export type CompareSessionCollegeUncheckedCreateInput = {
    id?: string
    sessionId: string
    collegeId: string
  }

  export type CompareSessionCollegeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: CompareSessionUpdateOneRequiredWithoutCollegesNestedInput
    college?: CollegeUpdateOneRequiredWithoutCompareSessionsNestedInput
  }

  export type CompareSessionCollegeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type CompareSessionCollegeCreateManyInput = {
    id?: string
    sessionId: string
    collegeId: string
  }

  export type CompareSessionCollegeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CompareSessionCollegeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SavedCollegeListRelationFilter = {
    every?: SavedCollegeWhereInput
    some?: SavedCollegeWhereInput
    none?: SavedCollegeWhereInput
  }

  export type CompareSessionListRelationFilter = {
    every?: CompareSessionWhereInput
    some?: CompareSessionWhereInput
    none?: CompareSessionWhereInput
  }

  export type SavedCollegeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompareSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCollegeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CollegeType | EnumCollegeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollegeType[] | ListEnumCollegeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollegeType[] | ListEnumCollegeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollegeTypeFilter<$PrismaModel> | $Enums.CollegeType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type PlacementListRelationFilter = {
    every?: PlacementWhereInput
    some?: PlacementWhereInput
    none?: PlacementWhereInput
  }

  export type CompareSessionCollegeListRelationFilter = {
    every?: CompareSessionCollegeWhereInput
    some?: CompareSessionCollegeWhereInput
    none?: CompareSessionCollegeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlacementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompareSessionCollegeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollegeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    state?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    totalFees?: SortOrder
    establishedYear?: SortOrder
    imageUrl?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollegeAvgOrderByAggregateInput = {
    rating?: SortOrder
    totalFees?: SortOrder
    establishedYear?: SortOrder
  }

  export type CollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    state?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    totalFees?: SortOrder
    establishedYear?: SortOrder
    imageUrl?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollegeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    state?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    totalFees?: SortOrder
    establishedYear?: SortOrder
    imageUrl?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollegeSumOrderByAggregateInput = {
    rating?: SortOrder
    totalFees?: SortOrder
    establishedYear?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCollegeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollegeType | EnumCollegeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollegeType[] | ListEnumCollegeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollegeType[] | ListEnumCollegeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollegeTypeWithAggregatesFilter<$PrismaModel> | $Enums.CollegeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollegeTypeFilter<$PrismaModel>
    _max?: NestedEnumCollegeTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CollegeScalarRelationFilter = {
    is?: CollegeWhereInput
    isNot?: CollegeWhereInput
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    fees?: SortOrder
    description?: SortOrder
    collegeId?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    fees?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    fees?: SortOrder
    description?: SortOrder
    collegeId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    fees?: SortOrder
    description?: SortOrder
    collegeId?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    fees?: SortOrder
  }

  export type PlacementCountOrderByAggregateInput = {
    id?: SortOrder
    averagePackage?: SortOrder
    highestPackage?: SortOrder
    placementPercentage?: SortOrder
    topRecruiters?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
  }

  export type PlacementAvgOrderByAggregateInput = {
    averagePackage?: SortOrder
    highestPackage?: SortOrder
    placementPercentage?: SortOrder
    year?: SortOrder
  }

  export type PlacementMaxOrderByAggregateInput = {
    id?: SortOrder
    averagePackage?: SortOrder
    highestPackage?: SortOrder
    placementPercentage?: SortOrder
    topRecruiters?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
  }

  export type PlacementMinOrderByAggregateInput = {
    id?: SortOrder
    averagePackage?: SortOrder
    highestPackage?: SortOrder
    placementPercentage?: SortOrder
    topRecruiters?: SortOrder
    year?: SortOrder
    collegeId?: SortOrder
  }

  export type PlacementSumOrderByAggregateInput = {
    averagePackage?: SortOrder
    highestPackage?: SortOrder
    placementPercentage?: SortOrder
    year?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SavedCollegeUserIdCollegeIdCompoundUniqueInput = {
    userId: string
    collegeId: string
  }

  export type SavedCollegeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
  }

  export type SavedCollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
  }

  export type SavedCollegeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
  }

  export type CompareSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CompareSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CompareSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CompareSessionScalarRelationFilter = {
    is?: CompareSessionWhereInput
    isNot?: CompareSessionWhereInput
  }

  export type CompareSessionCollegeSessionIdCollegeIdCompoundUniqueInput = {
    sessionId: string
    collegeId: string
  }

  export type CompareSessionCollegeCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    collegeId?: SortOrder
  }

  export type CompareSessionCollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    collegeId?: SortOrder
  }

  export type CompareSessionCollegeMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    collegeId?: SortOrder
  }

  export type SavedCollegeCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedCollegeCreateWithoutUserInput, SavedCollegeUncheckedCreateWithoutUserInput> | SavedCollegeCreateWithoutUserInput[] | SavedCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCollegeCreateOrConnectWithoutUserInput | SavedCollegeCreateOrConnectWithoutUserInput[]
    createMany?: SavedCollegeCreateManyUserInputEnvelope
    connect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
  }

  export type CompareSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<CompareSessionCreateWithoutUserInput, CompareSessionUncheckedCreateWithoutUserInput> | CompareSessionCreateWithoutUserInput[] | CompareSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompareSessionCreateOrConnectWithoutUserInput | CompareSessionCreateOrConnectWithoutUserInput[]
    createMany?: CompareSessionCreateManyUserInputEnvelope
    connect?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
  }

  export type SavedCollegeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedCollegeCreateWithoutUserInput, SavedCollegeUncheckedCreateWithoutUserInput> | SavedCollegeCreateWithoutUserInput[] | SavedCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCollegeCreateOrConnectWithoutUserInput | SavedCollegeCreateOrConnectWithoutUserInput[]
    createMany?: SavedCollegeCreateManyUserInputEnvelope
    connect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
  }

  export type CompareSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompareSessionCreateWithoutUserInput, CompareSessionUncheckedCreateWithoutUserInput> | CompareSessionCreateWithoutUserInput[] | CompareSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompareSessionCreateOrConnectWithoutUserInput | CompareSessionCreateOrConnectWithoutUserInput[]
    createMany?: CompareSessionCreateManyUserInputEnvelope
    connect?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SavedCollegeUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedCollegeCreateWithoutUserInput, SavedCollegeUncheckedCreateWithoutUserInput> | SavedCollegeCreateWithoutUserInput[] | SavedCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCollegeCreateOrConnectWithoutUserInput | SavedCollegeCreateOrConnectWithoutUserInput[]
    upsert?: SavedCollegeUpsertWithWhereUniqueWithoutUserInput | SavedCollegeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedCollegeCreateManyUserInputEnvelope
    set?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    disconnect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    delete?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    connect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    update?: SavedCollegeUpdateWithWhereUniqueWithoutUserInput | SavedCollegeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedCollegeUpdateManyWithWhereWithoutUserInput | SavedCollegeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedCollegeScalarWhereInput | SavedCollegeScalarWhereInput[]
  }

  export type CompareSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompareSessionCreateWithoutUserInput, CompareSessionUncheckedCreateWithoutUserInput> | CompareSessionCreateWithoutUserInput[] | CompareSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompareSessionCreateOrConnectWithoutUserInput | CompareSessionCreateOrConnectWithoutUserInput[]
    upsert?: CompareSessionUpsertWithWhereUniqueWithoutUserInput | CompareSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompareSessionCreateManyUserInputEnvelope
    set?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
    disconnect?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
    delete?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
    connect?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
    update?: CompareSessionUpdateWithWhereUniqueWithoutUserInput | CompareSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompareSessionUpdateManyWithWhereWithoutUserInput | CompareSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompareSessionScalarWhereInput | CompareSessionScalarWhereInput[]
  }

  export type SavedCollegeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedCollegeCreateWithoutUserInput, SavedCollegeUncheckedCreateWithoutUserInput> | SavedCollegeCreateWithoutUserInput[] | SavedCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCollegeCreateOrConnectWithoutUserInput | SavedCollegeCreateOrConnectWithoutUserInput[]
    upsert?: SavedCollegeUpsertWithWhereUniqueWithoutUserInput | SavedCollegeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedCollegeCreateManyUserInputEnvelope
    set?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    disconnect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    delete?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    connect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    update?: SavedCollegeUpdateWithWhereUniqueWithoutUserInput | SavedCollegeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedCollegeUpdateManyWithWhereWithoutUserInput | SavedCollegeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedCollegeScalarWhereInput | SavedCollegeScalarWhereInput[]
  }

  export type CompareSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompareSessionCreateWithoutUserInput, CompareSessionUncheckedCreateWithoutUserInput> | CompareSessionCreateWithoutUserInput[] | CompareSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompareSessionCreateOrConnectWithoutUserInput | CompareSessionCreateOrConnectWithoutUserInput[]
    upsert?: CompareSessionUpsertWithWhereUniqueWithoutUserInput | CompareSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompareSessionCreateManyUserInputEnvelope
    set?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
    disconnect?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
    delete?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
    connect?: CompareSessionWhereUniqueInput | CompareSessionWhereUniqueInput[]
    update?: CompareSessionUpdateWithWhereUniqueWithoutUserInput | CompareSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompareSessionUpdateManyWithWhereWithoutUserInput | CompareSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompareSessionScalarWhereInput | CompareSessionScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CourseCreateWithoutCollegeInput, CourseUncheckedCreateWithoutCollegeInput> | CourseCreateWithoutCollegeInput[] | CourseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCollegeInput | CourseCreateOrConnectWithoutCollegeInput[]
    createMany?: CourseCreateManyCollegeInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type PlacementCreateNestedManyWithoutCollegeInput = {
    create?: XOR<PlacementCreateWithoutCollegeInput, PlacementUncheckedCreateWithoutCollegeInput> | PlacementCreateWithoutCollegeInput[] | PlacementUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutCollegeInput | PlacementCreateOrConnectWithoutCollegeInput[]
    createMany?: PlacementCreateManyCollegeInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type SavedCollegeCreateNestedManyWithoutCollegeInput = {
    create?: XOR<SavedCollegeCreateWithoutCollegeInput, SavedCollegeUncheckedCreateWithoutCollegeInput> | SavedCollegeCreateWithoutCollegeInput[] | SavedCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: SavedCollegeCreateOrConnectWithoutCollegeInput | SavedCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: SavedCollegeCreateManyCollegeInputEnvelope
    connect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
  }

  export type CompareSessionCollegeCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CompareSessionCollegeCreateWithoutCollegeInput, CompareSessionCollegeUncheckedCreateWithoutCollegeInput> | CompareSessionCollegeCreateWithoutCollegeInput[] | CompareSessionCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CompareSessionCollegeCreateOrConnectWithoutCollegeInput | CompareSessionCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: CompareSessionCollegeCreateManyCollegeInputEnvelope
    connect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CourseCreateWithoutCollegeInput, CourseUncheckedCreateWithoutCollegeInput> | CourseCreateWithoutCollegeInput[] | CourseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCollegeInput | CourseCreateOrConnectWithoutCollegeInput[]
    createMany?: CourseCreateManyCollegeInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type PlacementUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<PlacementCreateWithoutCollegeInput, PlacementUncheckedCreateWithoutCollegeInput> | PlacementCreateWithoutCollegeInput[] | PlacementUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutCollegeInput | PlacementCreateOrConnectWithoutCollegeInput[]
    createMany?: PlacementCreateManyCollegeInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type SavedCollegeUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<SavedCollegeCreateWithoutCollegeInput, SavedCollegeUncheckedCreateWithoutCollegeInput> | SavedCollegeCreateWithoutCollegeInput[] | SavedCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: SavedCollegeCreateOrConnectWithoutCollegeInput | SavedCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: SavedCollegeCreateManyCollegeInputEnvelope
    connect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
  }

  export type CompareSessionCollegeUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CompareSessionCollegeCreateWithoutCollegeInput, CompareSessionCollegeUncheckedCreateWithoutCollegeInput> | CompareSessionCollegeCreateWithoutCollegeInput[] | CompareSessionCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CompareSessionCollegeCreateOrConnectWithoutCollegeInput | CompareSessionCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: CompareSessionCollegeCreateManyCollegeInputEnvelope
    connect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCollegeTypeFieldUpdateOperationsInput = {
    set?: $Enums.CollegeType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CourseCreateWithoutCollegeInput, CourseUncheckedCreateWithoutCollegeInput> | CourseCreateWithoutCollegeInput[] | CourseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCollegeInput | CourseCreateOrConnectWithoutCollegeInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCollegeInput | CourseUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CourseCreateManyCollegeInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCollegeInput | CourseUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCollegeInput | CourseUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type PlacementUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<PlacementCreateWithoutCollegeInput, PlacementUncheckedCreateWithoutCollegeInput> | PlacementCreateWithoutCollegeInput[] | PlacementUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutCollegeInput | PlacementCreateOrConnectWithoutCollegeInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutCollegeInput | PlacementUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: PlacementCreateManyCollegeInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutCollegeInput | PlacementUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutCollegeInput | PlacementUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type SavedCollegeUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<SavedCollegeCreateWithoutCollegeInput, SavedCollegeUncheckedCreateWithoutCollegeInput> | SavedCollegeCreateWithoutCollegeInput[] | SavedCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: SavedCollegeCreateOrConnectWithoutCollegeInput | SavedCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: SavedCollegeUpsertWithWhereUniqueWithoutCollegeInput | SavedCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: SavedCollegeCreateManyCollegeInputEnvelope
    set?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    disconnect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    delete?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    connect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    update?: SavedCollegeUpdateWithWhereUniqueWithoutCollegeInput | SavedCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: SavedCollegeUpdateManyWithWhereWithoutCollegeInput | SavedCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: SavedCollegeScalarWhereInput | SavedCollegeScalarWhereInput[]
  }

  export type CompareSessionCollegeUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CompareSessionCollegeCreateWithoutCollegeInput, CompareSessionCollegeUncheckedCreateWithoutCollegeInput> | CompareSessionCollegeCreateWithoutCollegeInput[] | CompareSessionCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CompareSessionCollegeCreateOrConnectWithoutCollegeInput | CompareSessionCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: CompareSessionCollegeUpsertWithWhereUniqueWithoutCollegeInput | CompareSessionCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CompareSessionCollegeCreateManyCollegeInputEnvelope
    set?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    disconnect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    delete?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    connect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    update?: CompareSessionCollegeUpdateWithWhereUniqueWithoutCollegeInput | CompareSessionCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CompareSessionCollegeUpdateManyWithWhereWithoutCollegeInput | CompareSessionCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CompareSessionCollegeScalarWhereInput | CompareSessionCollegeScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CourseCreateWithoutCollegeInput, CourseUncheckedCreateWithoutCollegeInput> | CourseCreateWithoutCollegeInput[] | CourseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCollegeInput | CourseCreateOrConnectWithoutCollegeInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCollegeInput | CourseUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CourseCreateManyCollegeInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCollegeInput | CourseUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCollegeInput | CourseUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type PlacementUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<PlacementCreateWithoutCollegeInput, PlacementUncheckedCreateWithoutCollegeInput> | PlacementCreateWithoutCollegeInput[] | PlacementUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutCollegeInput | PlacementCreateOrConnectWithoutCollegeInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutCollegeInput | PlacementUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: PlacementCreateManyCollegeInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutCollegeInput | PlacementUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutCollegeInput | PlacementUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type SavedCollegeUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<SavedCollegeCreateWithoutCollegeInput, SavedCollegeUncheckedCreateWithoutCollegeInput> | SavedCollegeCreateWithoutCollegeInput[] | SavedCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: SavedCollegeCreateOrConnectWithoutCollegeInput | SavedCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: SavedCollegeUpsertWithWhereUniqueWithoutCollegeInput | SavedCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: SavedCollegeCreateManyCollegeInputEnvelope
    set?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    disconnect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    delete?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    connect?: SavedCollegeWhereUniqueInput | SavedCollegeWhereUniqueInput[]
    update?: SavedCollegeUpdateWithWhereUniqueWithoutCollegeInput | SavedCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: SavedCollegeUpdateManyWithWhereWithoutCollegeInput | SavedCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: SavedCollegeScalarWhereInput | SavedCollegeScalarWhereInput[]
  }

  export type CompareSessionCollegeUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CompareSessionCollegeCreateWithoutCollegeInput, CompareSessionCollegeUncheckedCreateWithoutCollegeInput> | CompareSessionCollegeCreateWithoutCollegeInput[] | CompareSessionCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CompareSessionCollegeCreateOrConnectWithoutCollegeInput | CompareSessionCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: CompareSessionCollegeUpsertWithWhereUniqueWithoutCollegeInput | CompareSessionCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CompareSessionCollegeCreateManyCollegeInputEnvelope
    set?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    disconnect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    delete?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    connect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    update?: CompareSessionCollegeUpdateWithWhereUniqueWithoutCollegeInput | CompareSessionCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CompareSessionCollegeUpdateManyWithWhereWithoutCollegeInput | CompareSessionCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CompareSessionCollegeScalarWhereInput | CompareSessionCollegeScalarWhereInput[]
  }

  export type CollegeCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CollegeCreateWithoutCoursesInput, CollegeUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutCoursesInput
    connect?: CollegeWhereUniqueInput
  }

  export type CollegeUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<CollegeCreateWithoutCoursesInput, CollegeUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutCoursesInput
    upsert?: CollegeUpsertWithoutCoursesInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutCoursesInput, CollegeUpdateWithoutCoursesInput>, CollegeUncheckedUpdateWithoutCoursesInput>
  }

  export type CollegeCreateNestedOneWithoutPlacementsInput = {
    create?: XOR<CollegeCreateWithoutPlacementsInput, CollegeUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutPlacementsInput
    connect?: CollegeWhereUniqueInput
  }

  export type CollegeUpdateOneRequiredWithoutPlacementsNestedInput = {
    create?: XOR<CollegeCreateWithoutPlacementsInput, CollegeUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutPlacementsInput
    upsert?: CollegeUpsertWithoutPlacementsInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutPlacementsInput, CollegeUpdateWithoutPlacementsInput>, CollegeUncheckedUpdateWithoutPlacementsInput>
  }

  export type UserCreateNestedOneWithoutSavedCollegesInput = {
    create?: XOR<UserCreateWithoutSavedCollegesInput, UserUncheckedCreateWithoutSavedCollegesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCollegesInput
    connect?: UserWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutSavedByInput = {
    create?: XOR<CollegeCreateWithoutSavedByInput, CollegeUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutSavedByInput
    connect?: CollegeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedCollegesNestedInput = {
    create?: XOR<UserCreateWithoutSavedCollegesInput, UserUncheckedCreateWithoutSavedCollegesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCollegesInput
    upsert?: UserUpsertWithoutSavedCollegesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedCollegesInput, UserUpdateWithoutSavedCollegesInput>, UserUncheckedUpdateWithoutSavedCollegesInput>
  }

  export type CollegeUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<CollegeCreateWithoutSavedByInput, CollegeUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutSavedByInput
    upsert?: CollegeUpsertWithoutSavedByInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutSavedByInput, CollegeUpdateWithoutSavedByInput>, CollegeUncheckedUpdateWithoutSavedByInput>
  }

  export type UserCreateNestedOneWithoutCompareSessionsInput = {
    create?: XOR<UserCreateWithoutCompareSessionsInput, UserUncheckedCreateWithoutCompareSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompareSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type CompareSessionCollegeCreateNestedManyWithoutSessionInput = {
    create?: XOR<CompareSessionCollegeCreateWithoutSessionInput, CompareSessionCollegeUncheckedCreateWithoutSessionInput> | CompareSessionCollegeCreateWithoutSessionInput[] | CompareSessionCollegeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CompareSessionCollegeCreateOrConnectWithoutSessionInput | CompareSessionCollegeCreateOrConnectWithoutSessionInput[]
    createMany?: CompareSessionCollegeCreateManySessionInputEnvelope
    connect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
  }

  export type CompareSessionCollegeUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<CompareSessionCollegeCreateWithoutSessionInput, CompareSessionCollegeUncheckedCreateWithoutSessionInput> | CompareSessionCollegeCreateWithoutSessionInput[] | CompareSessionCollegeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CompareSessionCollegeCreateOrConnectWithoutSessionInput | CompareSessionCollegeCreateOrConnectWithoutSessionInput[]
    createMany?: CompareSessionCollegeCreateManySessionInputEnvelope
    connect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCompareSessionsNestedInput = {
    create?: XOR<UserCreateWithoutCompareSessionsInput, UserUncheckedCreateWithoutCompareSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompareSessionsInput
    upsert?: UserUpsertWithoutCompareSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompareSessionsInput, UserUpdateWithoutCompareSessionsInput>, UserUncheckedUpdateWithoutCompareSessionsInput>
  }

  export type CompareSessionCollegeUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CompareSessionCollegeCreateWithoutSessionInput, CompareSessionCollegeUncheckedCreateWithoutSessionInput> | CompareSessionCollegeCreateWithoutSessionInput[] | CompareSessionCollegeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CompareSessionCollegeCreateOrConnectWithoutSessionInput | CompareSessionCollegeCreateOrConnectWithoutSessionInput[]
    upsert?: CompareSessionCollegeUpsertWithWhereUniqueWithoutSessionInput | CompareSessionCollegeUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CompareSessionCollegeCreateManySessionInputEnvelope
    set?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    disconnect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    delete?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    connect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    update?: CompareSessionCollegeUpdateWithWhereUniqueWithoutSessionInput | CompareSessionCollegeUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CompareSessionCollegeUpdateManyWithWhereWithoutSessionInput | CompareSessionCollegeUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CompareSessionCollegeScalarWhereInput | CompareSessionCollegeScalarWhereInput[]
  }

  export type CompareSessionCollegeUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CompareSessionCollegeCreateWithoutSessionInput, CompareSessionCollegeUncheckedCreateWithoutSessionInput> | CompareSessionCollegeCreateWithoutSessionInput[] | CompareSessionCollegeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CompareSessionCollegeCreateOrConnectWithoutSessionInput | CompareSessionCollegeCreateOrConnectWithoutSessionInput[]
    upsert?: CompareSessionCollegeUpsertWithWhereUniqueWithoutSessionInput | CompareSessionCollegeUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CompareSessionCollegeCreateManySessionInputEnvelope
    set?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    disconnect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    delete?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    connect?: CompareSessionCollegeWhereUniqueInput | CompareSessionCollegeWhereUniqueInput[]
    update?: CompareSessionCollegeUpdateWithWhereUniqueWithoutSessionInput | CompareSessionCollegeUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CompareSessionCollegeUpdateManyWithWhereWithoutSessionInput | CompareSessionCollegeUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CompareSessionCollegeScalarWhereInput | CompareSessionCollegeScalarWhereInput[]
  }

  export type CompareSessionCreateNestedOneWithoutCollegesInput = {
    create?: XOR<CompareSessionCreateWithoutCollegesInput, CompareSessionUncheckedCreateWithoutCollegesInput>
    connectOrCreate?: CompareSessionCreateOrConnectWithoutCollegesInput
    connect?: CompareSessionWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutCompareSessionsInput = {
    create?: XOR<CollegeCreateWithoutCompareSessionsInput, CollegeUncheckedCreateWithoutCompareSessionsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutCompareSessionsInput
    connect?: CollegeWhereUniqueInput
  }

  export type CompareSessionUpdateOneRequiredWithoutCollegesNestedInput = {
    create?: XOR<CompareSessionCreateWithoutCollegesInput, CompareSessionUncheckedCreateWithoutCollegesInput>
    connectOrCreate?: CompareSessionCreateOrConnectWithoutCollegesInput
    upsert?: CompareSessionUpsertWithoutCollegesInput
    connect?: CompareSessionWhereUniqueInput
    update?: XOR<XOR<CompareSessionUpdateToOneWithWhereWithoutCollegesInput, CompareSessionUpdateWithoutCollegesInput>, CompareSessionUncheckedUpdateWithoutCollegesInput>
  }

  export type CollegeUpdateOneRequiredWithoutCompareSessionsNestedInput = {
    create?: XOR<CollegeCreateWithoutCompareSessionsInput, CollegeUncheckedCreateWithoutCompareSessionsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutCompareSessionsInput
    upsert?: CollegeUpsertWithoutCompareSessionsInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutCompareSessionsInput, CollegeUpdateWithoutCompareSessionsInput>, CollegeUncheckedUpdateWithoutCompareSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCollegeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CollegeType | EnumCollegeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollegeType[] | ListEnumCollegeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollegeType[] | ListEnumCollegeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollegeTypeFilter<$PrismaModel> | $Enums.CollegeType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCollegeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollegeType | EnumCollegeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollegeType[] | ListEnumCollegeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollegeType[] | ListEnumCollegeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollegeTypeWithAggregatesFilter<$PrismaModel> | $Enums.CollegeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollegeTypeFilter<$PrismaModel>
    _max?: NestedEnumCollegeTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SavedCollegeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    college: CollegeCreateNestedOneWithoutSavedByInput
  }

  export type SavedCollegeUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    collegeId: string
  }

  export type SavedCollegeCreateOrConnectWithoutUserInput = {
    where: SavedCollegeWhereUniqueInput
    create: XOR<SavedCollegeCreateWithoutUserInput, SavedCollegeUncheckedCreateWithoutUserInput>
  }

  export type SavedCollegeCreateManyUserInputEnvelope = {
    data: SavedCollegeCreateManyUserInput | SavedCollegeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompareSessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    colleges?: CompareSessionCollegeCreateNestedManyWithoutSessionInput
  }

  export type CompareSessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    colleges?: CompareSessionCollegeUncheckedCreateNestedManyWithoutSessionInput
  }

  export type CompareSessionCreateOrConnectWithoutUserInput = {
    where: CompareSessionWhereUniqueInput
    create: XOR<CompareSessionCreateWithoutUserInput, CompareSessionUncheckedCreateWithoutUserInput>
  }

  export type CompareSessionCreateManyUserInputEnvelope = {
    data: CompareSessionCreateManyUserInput | CompareSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedCollegeUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedCollegeWhereUniqueInput
    update: XOR<SavedCollegeUpdateWithoutUserInput, SavedCollegeUncheckedUpdateWithoutUserInput>
    create: XOR<SavedCollegeCreateWithoutUserInput, SavedCollegeUncheckedCreateWithoutUserInput>
  }

  export type SavedCollegeUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedCollegeWhereUniqueInput
    data: XOR<SavedCollegeUpdateWithoutUserInput, SavedCollegeUncheckedUpdateWithoutUserInput>
  }

  export type SavedCollegeUpdateManyWithWhereWithoutUserInput = {
    where: SavedCollegeScalarWhereInput
    data: XOR<SavedCollegeUpdateManyMutationInput, SavedCollegeUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedCollegeScalarWhereInput = {
    AND?: SavedCollegeScalarWhereInput | SavedCollegeScalarWhereInput[]
    OR?: SavedCollegeScalarWhereInput[]
    NOT?: SavedCollegeScalarWhereInput | SavedCollegeScalarWhereInput[]
    id?: StringFilter<"SavedCollege"> | string
    createdAt?: DateTimeFilter<"SavedCollege"> | Date | string
    userId?: StringFilter<"SavedCollege"> | string
    collegeId?: StringFilter<"SavedCollege"> | string
  }

  export type CompareSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: CompareSessionWhereUniqueInput
    update: XOR<CompareSessionUpdateWithoutUserInput, CompareSessionUncheckedUpdateWithoutUserInput>
    create: XOR<CompareSessionCreateWithoutUserInput, CompareSessionUncheckedCreateWithoutUserInput>
  }

  export type CompareSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: CompareSessionWhereUniqueInput
    data: XOR<CompareSessionUpdateWithoutUserInput, CompareSessionUncheckedUpdateWithoutUserInput>
  }

  export type CompareSessionUpdateManyWithWhereWithoutUserInput = {
    where: CompareSessionScalarWhereInput
    data: XOR<CompareSessionUpdateManyMutationInput, CompareSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type CompareSessionScalarWhereInput = {
    AND?: CompareSessionScalarWhereInput | CompareSessionScalarWhereInput[]
    OR?: CompareSessionScalarWhereInput[]
    NOT?: CompareSessionScalarWhereInput | CompareSessionScalarWhereInput[]
    id?: StringFilter<"CompareSession"> | string
    createdAt?: DateTimeFilter<"CompareSession"> | Date | string
    userId?: StringFilter<"CompareSession"> | string
  }

  export type CourseCreateWithoutCollegeInput = {
    id?: string
    name: string
    duration: string
    fees: number
    description?: string | null
  }

  export type CourseUncheckedCreateWithoutCollegeInput = {
    id?: string
    name: string
    duration: string
    fees: number
    description?: string | null
  }

  export type CourseCreateOrConnectWithoutCollegeInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCollegeInput, CourseUncheckedCreateWithoutCollegeInput>
  }

  export type CourseCreateManyCollegeInputEnvelope = {
    data: CourseCreateManyCollegeInput | CourseCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type PlacementCreateWithoutCollegeInput = {
    id?: string
    averagePackage: number
    highestPackage: number
    placementPercentage: number
    topRecruiters: string
    year: number
  }

  export type PlacementUncheckedCreateWithoutCollegeInput = {
    id?: string
    averagePackage: number
    highestPackage: number
    placementPercentage: number
    topRecruiters: string
    year: number
  }

  export type PlacementCreateOrConnectWithoutCollegeInput = {
    where: PlacementWhereUniqueInput
    create: XOR<PlacementCreateWithoutCollegeInput, PlacementUncheckedCreateWithoutCollegeInput>
  }

  export type PlacementCreateManyCollegeInputEnvelope = {
    data: PlacementCreateManyCollegeInput | PlacementCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type SavedCollegeCreateWithoutCollegeInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedCollegesInput
  }

  export type SavedCollegeUncheckedCreateWithoutCollegeInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type SavedCollegeCreateOrConnectWithoutCollegeInput = {
    where: SavedCollegeWhereUniqueInput
    create: XOR<SavedCollegeCreateWithoutCollegeInput, SavedCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type SavedCollegeCreateManyCollegeInputEnvelope = {
    data: SavedCollegeCreateManyCollegeInput | SavedCollegeCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type CompareSessionCollegeCreateWithoutCollegeInput = {
    id?: string
    session: CompareSessionCreateNestedOneWithoutCollegesInput
  }

  export type CompareSessionCollegeUncheckedCreateWithoutCollegeInput = {
    id?: string
    sessionId: string
  }

  export type CompareSessionCollegeCreateOrConnectWithoutCollegeInput = {
    where: CompareSessionCollegeWhereUniqueInput
    create: XOR<CompareSessionCollegeCreateWithoutCollegeInput, CompareSessionCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type CompareSessionCollegeCreateManyCollegeInputEnvelope = {
    data: CompareSessionCollegeCreateManyCollegeInput | CompareSessionCollegeCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutCollegeInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCollegeInput, CourseUncheckedUpdateWithoutCollegeInput>
    create: XOR<CourseCreateWithoutCollegeInput, CourseUncheckedCreateWithoutCollegeInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCollegeInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCollegeInput, CourseUncheckedUpdateWithoutCollegeInput>
  }

  export type CourseUpdateManyWithWhereWithoutCollegeInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCollegeInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    duration?: StringFilter<"Course"> | string
    fees?: IntFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    collegeId?: StringFilter<"Course"> | string
  }

  export type PlacementUpsertWithWhereUniqueWithoutCollegeInput = {
    where: PlacementWhereUniqueInput
    update: XOR<PlacementUpdateWithoutCollegeInput, PlacementUncheckedUpdateWithoutCollegeInput>
    create: XOR<PlacementCreateWithoutCollegeInput, PlacementUncheckedCreateWithoutCollegeInput>
  }

  export type PlacementUpdateWithWhereUniqueWithoutCollegeInput = {
    where: PlacementWhereUniqueInput
    data: XOR<PlacementUpdateWithoutCollegeInput, PlacementUncheckedUpdateWithoutCollegeInput>
  }

  export type PlacementUpdateManyWithWhereWithoutCollegeInput = {
    where: PlacementScalarWhereInput
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyWithoutCollegeInput>
  }

  export type PlacementScalarWhereInput = {
    AND?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
    OR?: PlacementScalarWhereInput[]
    NOT?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
    id?: StringFilter<"Placement"> | string
    averagePackage?: IntFilter<"Placement"> | number
    highestPackage?: IntFilter<"Placement"> | number
    placementPercentage?: FloatFilter<"Placement"> | number
    topRecruiters?: StringFilter<"Placement"> | string
    year?: IntFilter<"Placement"> | number
    collegeId?: StringFilter<"Placement"> | string
  }

  export type SavedCollegeUpsertWithWhereUniqueWithoutCollegeInput = {
    where: SavedCollegeWhereUniqueInput
    update: XOR<SavedCollegeUpdateWithoutCollegeInput, SavedCollegeUncheckedUpdateWithoutCollegeInput>
    create: XOR<SavedCollegeCreateWithoutCollegeInput, SavedCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type SavedCollegeUpdateWithWhereUniqueWithoutCollegeInput = {
    where: SavedCollegeWhereUniqueInput
    data: XOR<SavedCollegeUpdateWithoutCollegeInput, SavedCollegeUncheckedUpdateWithoutCollegeInput>
  }

  export type SavedCollegeUpdateManyWithWhereWithoutCollegeInput = {
    where: SavedCollegeScalarWhereInput
    data: XOR<SavedCollegeUpdateManyMutationInput, SavedCollegeUncheckedUpdateManyWithoutCollegeInput>
  }

  export type CompareSessionCollegeUpsertWithWhereUniqueWithoutCollegeInput = {
    where: CompareSessionCollegeWhereUniqueInput
    update: XOR<CompareSessionCollegeUpdateWithoutCollegeInput, CompareSessionCollegeUncheckedUpdateWithoutCollegeInput>
    create: XOR<CompareSessionCollegeCreateWithoutCollegeInput, CompareSessionCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type CompareSessionCollegeUpdateWithWhereUniqueWithoutCollegeInput = {
    where: CompareSessionCollegeWhereUniqueInput
    data: XOR<CompareSessionCollegeUpdateWithoutCollegeInput, CompareSessionCollegeUncheckedUpdateWithoutCollegeInput>
  }

  export type CompareSessionCollegeUpdateManyWithWhereWithoutCollegeInput = {
    where: CompareSessionCollegeScalarWhereInput
    data: XOR<CompareSessionCollegeUpdateManyMutationInput, CompareSessionCollegeUncheckedUpdateManyWithoutCollegeInput>
  }

  export type CompareSessionCollegeScalarWhereInput = {
    AND?: CompareSessionCollegeScalarWhereInput | CompareSessionCollegeScalarWhereInput[]
    OR?: CompareSessionCollegeScalarWhereInput[]
    NOT?: CompareSessionCollegeScalarWhereInput | CompareSessionCollegeScalarWhereInput[]
    id?: StringFilter<"CompareSessionCollege"> | string
    sessionId?: StringFilter<"CompareSessionCollege"> | string
    collegeId?: StringFilter<"CompareSessionCollege"> | string
  }

  export type CollegeCreateWithoutCoursesInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    placements?: PlacementCreateNestedManyWithoutCollegeInput
    savedBy?: SavedCollegeCreateNestedManyWithoutCollegeInput
    compareSessions?: CompareSessionCollegeCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    placements?: PlacementUncheckedCreateNestedManyWithoutCollegeInput
    savedBy?: SavedCollegeUncheckedCreateNestedManyWithoutCollegeInput
    compareSessions?: CompareSessionCollegeUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutCoursesInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutCoursesInput, CollegeUncheckedCreateWithoutCoursesInput>
  }

  export type CollegeUpsertWithoutCoursesInput = {
    update: XOR<CollegeUpdateWithoutCoursesInput, CollegeUncheckedUpdateWithoutCoursesInput>
    create: XOR<CollegeCreateWithoutCoursesInput, CollegeUncheckedCreateWithoutCoursesInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutCoursesInput, CollegeUncheckedUpdateWithoutCoursesInput>
  }

  export type CollegeUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: PlacementUpdateManyWithoutCollegeNestedInput
    savedBy?: SavedCollegeUpdateManyWithoutCollegeNestedInput
    compareSessions?: CompareSessionCollegeUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: PlacementUncheckedUpdateManyWithoutCollegeNestedInput
    savedBy?: SavedCollegeUncheckedUpdateManyWithoutCollegeNestedInput
    compareSessions?: CompareSessionCollegeUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateWithoutPlacementsInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCollegeInput
    savedBy?: SavedCollegeCreateNestedManyWithoutCollegeInput
    compareSessions?: CompareSessionCollegeCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutPlacementsInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCollegeInput
    savedBy?: SavedCollegeUncheckedCreateNestedManyWithoutCollegeInput
    compareSessions?: CompareSessionCollegeUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutPlacementsInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutPlacementsInput, CollegeUncheckedCreateWithoutPlacementsInput>
  }

  export type CollegeUpsertWithoutPlacementsInput = {
    update: XOR<CollegeUpdateWithoutPlacementsInput, CollegeUncheckedUpdateWithoutPlacementsInput>
    create: XOR<CollegeCreateWithoutPlacementsInput, CollegeUncheckedCreateWithoutPlacementsInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutPlacementsInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutPlacementsInput, CollegeUncheckedUpdateWithoutPlacementsInput>
  }

  export type CollegeUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCollegeNestedInput
    savedBy?: SavedCollegeUpdateManyWithoutCollegeNestedInput
    compareSessions?: CompareSessionCollegeUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCollegeNestedInput
    savedBy?: SavedCollegeUncheckedUpdateManyWithoutCollegeNestedInput
    compareSessions?: CompareSessionCollegeUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type UserCreateWithoutSavedCollegesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    compareSessions?: CompareSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedCollegesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    compareSessions?: CompareSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedCollegesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedCollegesInput, UserUncheckedCreateWithoutSavedCollegesInput>
  }

  export type CollegeCreateWithoutSavedByInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCollegeInput
    placements?: PlacementCreateNestedManyWithoutCollegeInput
    compareSessions?: CompareSessionCollegeCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutSavedByInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCollegeInput
    placements?: PlacementUncheckedCreateNestedManyWithoutCollegeInput
    compareSessions?: CompareSessionCollegeUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutSavedByInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutSavedByInput, CollegeUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedCollegesInput = {
    update: XOR<UserUpdateWithoutSavedCollegesInput, UserUncheckedUpdateWithoutSavedCollegesInput>
    create: XOR<UserCreateWithoutSavedCollegesInput, UserUncheckedCreateWithoutSavedCollegesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedCollegesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedCollegesInput, UserUncheckedUpdateWithoutSavedCollegesInput>
  }

  export type UserUpdateWithoutSavedCollegesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compareSessions?: CompareSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedCollegesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compareSessions?: CompareSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollegeUpsertWithoutSavedByInput = {
    update: XOR<CollegeUpdateWithoutSavedByInput, CollegeUncheckedUpdateWithoutSavedByInput>
    create: XOR<CollegeCreateWithoutSavedByInput, CollegeUncheckedCreateWithoutSavedByInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutSavedByInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutSavedByInput, CollegeUncheckedUpdateWithoutSavedByInput>
  }

  export type CollegeUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCollegeNestedInput
    placements?: PlacementUpdateManyWithoutCollegeNestedInput
    compareSessions?: CompareSessionCollegeUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCollegeNestedInput
    placements?: PlacementUncheckedUpdateManyWithoutCollegeNestedInput
    compareSessions?: CompareSessionCollegeUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type UserCreateWithoutCompareSessionsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedColleges?: SavedCollegeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompareSessionsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedColleges?: SavedCollegeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompareSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompareSessionsInput, UserUncheckedCreateWithoutCompareSessionsInput>
  }

  export type CompareSessionCollegeCreateWithoutSessionInput = {
    id?: string
    college: CollegeCreateNestedOneWithoutCompareSessionsInput
  }

  export type CompareSessionCollegeUncheckedCreateWithoutSessionInput = {
    id?: string
    collegeId: string
  }

  export type CompareSessionCollegeCreateOrConnectWithoutSessionInput = {
    where: CompareSessionCollegeWhereUniqueInput
    create: XOR<CompareSessionCollegeCreateWithoutSessionInput, CompareSessionCollegeUncheckedCreateWithoutSessionInput>
  }

  export type CompareSessionCollegeCreateManySessionInputEnvelope = {
    data: CompareSessionCollegeCreateManySessionInput | CompareSessionCollegeCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompareSessionsInput = {
    update: XOR<UserUpdateWithoutCompareSessionsInput, UserUncheckedUpdateWithoutCompareSessionsInput>
    create: XOR<UserCreateWithoutCompareSessionsInput, UserUncheckedCreateWithoutCompareSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompareSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompareSessionsInput, UserUncheckedUpdateWithoutCompareSessionsInput>
  }

  export type UserUpdateWithoutCompareSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedColleges?: SavedCollegeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompareSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedColleges?: SavedCollegeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompareSessionCollegeUpsertWithWhereUniqueWithoutSessionInput = {
    where: CompareSessionCollegeWhereUniqueInput
    update: XOR<CompareSessionCollegeUpdateWithoutSessionInput, CompareSessionCollegeUncheckedUpdateWithoutSessionInput>
    create: XOR<CompareSessionCollegeCreateWithoutSessionInput, CompareSessionCollegeUncheckedCreateWithoutSessionInput>
  }

  export type CompareSessionCollegeUpdateWithWhereUniqueWithoutSessionInput = {
    where: CompareSessionCollegeWhereUniqueInput
    data: XOR<CompareSessionCollegeUpdateWithoutSessionInput, CompareSessionCollegeUncheckedUpdateWithoutSessionInput>
  }

  export type CompareSessionCollegeUpdateManyWithWhereWithoutSessionInput = {
    where: CompareSessionCollegeScalarWhereInput
    data: XOR<CompareSessionCollegeUpdateManyMutationInput, CompareSessionCollegeUncheckedUpdateManyWithoutSessionInput>
  }

  export type CompareSessionCreateWithoutCollegesInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCompareSessionsInput
  }

  export type CompareSessionUncheckedCreateWithoutCollegesInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type CompareSessionCreateOrConnectWithoutCollegesInput = {
    where: CompareSessionWhereUniqueInput
    create: XOR<CompareSessionCreateWithoutCollegesInput, CompareSessionUncheckedCreateWithoutCollegesInput>
  }

  export type CollegeCreateWithoutCompareSessionsInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCollegeInput
    placements?: PlacementCreateNestedManyWithoutCollegeInput
    savedBy?: SavedCollegeCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutCompareSessionsInput = {
    id?: string
    name: string
    description?: string | null
    location: string
    state: string
    type: $Enums.CollegeType
    rating?: number
    totalFees: number
    establishedYear: number
    imageUrl?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCollegeInput
    placements?: PlacementUncheckedCreateNestedManyWithoutCollegeInput
    savedBy?: SavedCollegeUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutCompareSessionsInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutCompareSessionsInput, CollegeUncheckedCreateWithoutCompareSessionsInput>
  }

  export type CompareSessionUpsertWithoutCollegesInput = {
    update: XOR<CompareSessionUpdateWithoutCollegesInput, CompareSessionUncheckedUpdateWithoutCollegesInput>
    create: XOR<CompareSessionCreateWithoutCollegesInput, CompareSessionUncheckedCreateWithoutCollegesInput>
    where?: CompareSessionWhereInput
  }

  export type CompareSessionUpdateToOneWithWhereWithoutCollegesInput = {
    where?: CompareSessionWhereInput
    data: XOR<CompareSessionUpdateWithoutCollegesInput, CompareSessionUncheckedUpdateWithoutCollegesInput>
  }

  export type CompareSessionUpdateWithoutCollegesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompareSessionsNestedInput
  }

  export type CompareSessionUncheckedUpdateWithoutCollegesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeUpsertWithoutCompareSessionsInput = {
    update: XOR<CollegeUpdateWithoutCompareSessionsInput, CollegeUncheckedUpdateWithoutCompareSessionsInput>
    create: XOR<CollegeCreateWithoutCompareSessionsInput, CollegeUncheckedCreateWithoutCompareSessionsInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutCompareSessionsInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutCompareSessionsInput, CollegeUncheckedUpdateWithoutCompareSessionsInput>
  }

  export type CollegeUpdateWithoutCompareSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCollegeNestedInput
    placements?: PlacementUpdateManyWithoutCollegeNestedInput
    savedBy?: SavedCollegeUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutCompareSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    type?: EnumCollegeTypeFieldUpdateOperationsInput | $Enums.CollegeType
    rating?: FloatFieldUpdateOperationsInput | number
    totalFees?: IntFieldUpdateOperationsInput | number
    establishedYear?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCollegeNestedInput
    placements?: PlacementUncheckedUpdateManyWithoutCollegeNestedInput
    savedBy?: SavedCollegeUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type SavedCollegeCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    collegeId: string
  }

  export type CompareSessionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
  }

  export type SavedCollegeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedCollegeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedCollegeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type CompareSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CompareSessionCollegeUpdateManyWithoutSessionNestedInput
  }

  export type CompareSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CompareSessionCollegeUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type CompareSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyCollegeInput = {
    id?: string
    name: string
    duration: string
    fees: number
    description?: string | null
  }

  export type PlacementCreateManyCollegeInput = {
    id?: string
    averagePackage: number
    highestPackage: number
    placementPercentage: number
    topRecruiters: string
    year: number
  }

  export type SavedCollegeCreateManyCollegeInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type CompareSessionCollegeCreateManyCollegeInput = {
    id?: string
    sessionId: string
  }

  export type CourseUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    fees?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    fees?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    fees?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlacementUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    averagePackage?: IntFieldUpdateOperationsInput | number
    highestPackage?: IntFieldUpdateOperationsInput | number
    placementPercentage?: FloatFieldUpdateOperationsInput | number
    topRecruiters?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlacementUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    averagePackage?: IntFieldUpdateOperationsInput | number
    highestPackage?: IntFieldUpdateOperationsInput | number
    placementPercentage?: FloatFieldUpdateOperationsInput | number
    topRecruiters?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlacementUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    averagePackage?: IntFieldUpdateOperationsInput | number
    highestPackage?: IntFieldUpdateOperationsInput | number
    placementPercentage?: FloatFieldUpdateOperationsInput | number
    topRecruiters?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type SavedCollegeUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedCollegesNestedInput
  }

  export type SavedCollegeUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedCollegeUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CompareSessionCollegeUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: CompareSessionUpdateOneRequiredWithoutCollegesNestedInput
  }

  export type CompareSessionCollegeUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type CompareSessionCollegeUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type CompareSessionCollegeCreateManySessionInput = {
    id?: string
    collegeId: string
  }

  export type CompareSessionCollegeUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: CollegeUpdateOneRequiredWithoutCompareSessionsNestedInput
  }

  export type CompareSessionCollegeUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type CompareSessionCollegeUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}