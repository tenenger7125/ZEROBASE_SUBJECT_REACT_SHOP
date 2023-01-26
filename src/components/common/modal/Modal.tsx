const Modal = ({ activeFunction, inActiveFunction }: CartPageType) => {
  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
          <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
          <div className="modal-action">
            <label htmlFor="purchase-modal" className="btn btn-primary" onClick={activeFunction}>
              네
            </label>
            <label htmlFor="purchase-modal" className="btn btn-outline" onClick={inActiveFunction}>
              아니오
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
