import { Toaster as Sonner } from "sonner"

// Infer props from the Sonner component to avoid importing types at runtime
type InferredToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: InferredToasterProps) => {
  // Determine theme based on presence of the `dark` class on <html>
  const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  const theme: InferredToasterProps["theme"] = isDark ? 'dark' : 'light'

  return (
    <Sonner
  theme={theme}
  position={props.position ?? 'top-center'}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
