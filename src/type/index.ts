
export interface VFilter {
  install(Vue:any,options?:object) :void;
  mixin: {
    methods: {
      after(collection:any,count:number): []
    }
  };
};

export interface Util {
  typeCheck(data:any) : string;
  isObject(data:any) : boolean;
  isArray(data:any) : boolean;
  isUndefined(data:any) : boolean;
  isString(data:any) : boolean;
  isFunction(data:any) : boolean;
  toArray(data:any) : any[],
  objectContains(partial:object, object:object) : boolean;
}
