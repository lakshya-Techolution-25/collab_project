import { Button, buttonVariants } from "../ui/button"
import { cn } from "../../lib/utils"
import { LucideIcon } from "lucide-react"

type CustomButtonProps = {
  icon?: LucideIcon
  label: string
  fullWidth?: boolean
  variant?: "secondary" | "ghost"
  size?: "default" | "sm" | "lg"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function CustomButton({
  icon: Icon,
  label,
  fullWidth = false,
  variant = "secondary",
  size = "default",
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        buttonVariants({ variant, size }),
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {label}
    </Button>
  )
}
