declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, Record<string, unknown>>;
  export default component;
}
declare module 'dompurify' {
  const DOMPurify: unknown;
  export default DOMPurify;
}
