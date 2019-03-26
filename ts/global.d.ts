type primitive = boolean | number | string;
type actual = primitive | object | symbol | Function;
type defined = actual | null;
type JSONData<value = any> = { [name: string]: value };