interface Card {
  header?: React.FC<any>;
  body?: React.FC<any>;
  cardClasses?: string;
  cardStyle?: React.CSSProperties;
  headerClasses?: string;
  bodyClasses?: string;
}

export default Card;
