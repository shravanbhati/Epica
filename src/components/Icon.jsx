export function YouTube({ size = 24, color = "currentColor", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>YouTube</title>

      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Menu({ size = 20, color = "currentColor", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-color"
    >
      <path id="secondary" d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"></path>
      <path
        id="primary"
        d="M21,19H9a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2ZM15,7H3A1,1,0,0,1,3,5H15a1,1,0,0,1,0,2Z"
      ></path>
    </svg>
  );
}
