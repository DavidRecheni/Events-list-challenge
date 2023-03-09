import Blockies from "react-blockies";
import styles from "./Avatar.module.css";

interface IProps {
  userAddress: string | undefined;
}

const Avatar = ({ userAddress }: IProps) => {
  const seed = userAddress || "default";

  return <Blockies seed={seed} className={styles.image} />;
};

export default Avatar;
