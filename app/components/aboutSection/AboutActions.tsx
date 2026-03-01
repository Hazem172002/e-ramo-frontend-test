import {Button} from "@/components/ui/button";

type AboutActionsProps = {
  primaryLabel: string;
  secondaryLabel: string;
};

export default function AboutActions({
  primaryLabel,
  secondaryLabel
}: AboutActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <Button className="h-12 text-[16px] rounded-main bg-green px-8 text-white hover:bg-green/90">
        {primaryLabel}
      </Button>
      <Button
        variant="outline"
        className="h-12  text-[16px] rounded-main border-green/30 bg-transparent px-8 text-green hover:bg-off-white hover:text-green"
      >
        {secondaryLabel}
      </Button>
    </div>
  );
}

