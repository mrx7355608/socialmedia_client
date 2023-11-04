import {useEffect} from "react";
import {useUser} from "../../contexts/user";
import {useNavigate} from "react-router-dom";

export default function Homepage() {
  const { user } = useUser();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user) {
      navigateTo("/login");
    }
    // eslint-disable-next-line
  }, [user])
  return (
    <h3 className="text-center text-4xl font-bold">Home page</h3>
  );
}
