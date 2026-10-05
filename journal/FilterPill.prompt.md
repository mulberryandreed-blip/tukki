Filter chip — lay several out in a wrapping or horizontally-scrolling flex row, gap 8.
```jsx
{cats.map(c=><FilterPill key={c} label={c} active={cat===c} onClick={()=>setCat(c)}/>)}
```
