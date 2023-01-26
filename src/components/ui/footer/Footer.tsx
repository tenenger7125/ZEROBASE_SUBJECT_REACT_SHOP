import PayMethod from "../../common/paymethod/PayMethod";
import Sns from "../../common/sns/Sns";

const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <div>
        <a href='https://zero-base.co.kr/' target='_blank'>제로베이스</a>
      </div>
      <PayMethod/>
      <Sns/>
      <div>
        <p>Copyright © {new Date().getFullYear()} Zero Base</p>
      </div>
    </footer>
  );
};
export default Footer