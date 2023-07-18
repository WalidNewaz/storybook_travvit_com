import type { StyleType } from '../../types';

interface Card {
  header?: React.FC<any>;
  body?: React.FC<any>;
  cardClasses?: string;
  cardStyle?: StyleType;
  headerClasses?: string;
  bodyClasses?: string;
}

export default Card;
