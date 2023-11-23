import { camelize, toHandlerkey } from "../shared";

export function emit(instance, event, ...args) {
  console.log("emit", event);

  const { props } = instance;



  const handlerName = toHandlerkey(camelize(event))
  const handler = props[handlerName];

  handler && handler(...args);

}