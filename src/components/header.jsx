import "../styleys/i.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <img
          onClick={() => window.location.reload()}
          src="/img/accountant_1267258.png"
          alt="لوجو"
        />
        <h1>حاسبة العمر</h1>
      </div>
      <p>احسب عمرك بدقة باليوم والشهر والسنة</p>
    </header>
  );
}
