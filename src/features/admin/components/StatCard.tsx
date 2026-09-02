import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  description?: string;
  accentColor?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  description,
  accentColor = "#E8C84A",
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card__header">
        <div className="stat-card__info">
          <p className="stat-card__title">{title}</p>
          <h3 className="stat-card__value">{value}</h3>
          {trend && (
            <div
              className={`stat-card__trend ${
                trend.isPositive
                  ? "stat-card__trend--positive"
                  : "stat-card__trend--negative"
              }`}
            >
              <span>{trend.isPositive ? "↑" : "↓"}</span>
              <span>{trend.value}</span>
            </div>
          )}
          {description && (
            <p className="stat-card__desc">{description}</p>
          )}
        </div>
        <div
          className="stat-card__icon-wrapper"
          style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
        >
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
