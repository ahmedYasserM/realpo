import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type MenuButtonProps = {
  name: string;
  Icon: LucideIcon;
  isActive: boolean;
  onClickHandler: () => boolean;
};

export default function MenuButton({
  name,
  Icon,
  isActive,
  onClickHandler,
}: MenuButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={(e) => {
            e.preventDefault();
            onClickHandler();
          }}
          className={cn(
            "px-2 py-1 bg-transparent border-2 rounded-lg border-border text-primary hover:bg-accent hover:text-accent-foreground ",
            {
              "bg-accent text-accent-foreground": isActive,
            },
          )}
        >
          <Icon className="h-5 w-5"></Icon>
        </TooltipTrigger>

        <TooltipContent>
          <Tooltip>Toggle {name}</Tooltip>
        </TooltipContent>

        <TooltipTrigger />
      </Tooltip>
    </TooltipProvider>
  );
}
