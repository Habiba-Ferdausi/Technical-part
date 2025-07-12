export default function Meta({
    icon: Icon,
    label,
  }: {
    icon: React.ElementType;
    label: string;
  }) {
    return (
      <li className="flex items-center gap-1 truncate">
        <Icon size={14} className="shrink-0 text-primary" />
        <span className="truncate">{label}</span>
      </li>
    );
  }
  