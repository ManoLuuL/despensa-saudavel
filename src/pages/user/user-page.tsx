import { useUserService } from "../../api/services/user/view-models/use-user-service";
import { Button } from "../../components/molecules/button-custom";
import Navbar from "../../components/organism/Navbar";

export const UserPage = () => {
  const { getAllUsers } = useUserService();

  return (
    <>
      <Navbar />
      <div>Teste</div>
      <Button
        onClick={async () => {
          await getAllUsers().then((data) => {
            console.log(data);
          });
        }}
      />
    </>
  );
};
