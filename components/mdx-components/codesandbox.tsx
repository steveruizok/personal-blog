import { useTheme } from "next-themes"
import { CodeBox } from "./codebox"

export function CodeSandbox({
  url,
  height = 500,
}: {
  url: string
  height?: number
}) {
  const { theme } = useTheme()

  return (
    <CodeBox>
      <iframe
        src={`https://codesandbox.io/embed/${url}?fontsize=14&hidenavigation=1&theme=${
          theme === "light" ? "light" : "dark"
        }`}
        style={{
          width: "100%",
          height,
          border: "none",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title={url}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </CodeBox>
  )
}
