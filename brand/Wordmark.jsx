import React from 'react';
const SRC={berry:'wordmark-ripe-berry.png',ink:'wordmark-mulberry.png',light:'wordmark-light.png'};
export function Wordmark({tone='berry',height=34,base='',src,alt='Mulberry and Reed wordmark',style}){
  return <img src={src||base+'assets/logo/'+SRC[tone]} alt={alt} style={{height,width:'auto',display:'block',...style}}/>;
}
