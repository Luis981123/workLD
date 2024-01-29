import { useNavigate } from 'react-router-dom';

export function withNavigation(Component) {
  return function NavigationWrapper(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}