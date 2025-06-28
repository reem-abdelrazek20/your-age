import { useState } from "react";
import "../styleys/i.css";

export default function InputDate() {
  const [useToday, setUseToday] = useState(true);

  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const [todayDay, setTodayDay] = useState("");
  const [todayMonth, setTodayMonth] = useState("");
  const [todayYear, setTodayYear] = useState("");

  const [result, setResult] = useState("");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleAge = () => {
    if (!birthDay || !birthMonth || !birthYear) {
      setResult("من فضلك ادخلي تاريخ ميلادك كاملًا");
      return;
    }

    if (!useToday && (!todayDay || !todayMonth || !todayYear)) {
      setResult("من فضلك ادخلي التاريخ اللي عايزة تحسبي بناء عليه");
      return;
    }

    // التواريخ
    const tDay = useToday ? new Date().getDate() : Number(todayDay);
    const tMonth = useToday ? new Date().getMonth() + 1 : Number(todayMonth);
    const tYear = useToday ? new Date().getFullYear() : Number(todayYear);

    let year = tYear - Number(birthYear);
    let month = tMonth - Number(birthMonth);
    let day = tDay - Number(birthDay);

    if (day < 0) {
      month -= 1;
      day += 30;
    }

    if (month < 0) {
      year -= 1;
      month += 12;
    }

    setResult(`عندك ${year} سنة و ${month} شهر و ${day} يوم`);
  };

  return (
    <>
      {/* الزرارين */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setUseToday(true)}
          style={{
            backgroundColor: useToday ? "#63e6be" : "#eee",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          حساب على أساس النهاردة
        </button>
        <button
          onClick={() => setUseToday(false)}
          style={{
            backgroundColor: !useToday ? "#63e6be" : "#eee",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          اختيار تاريخ يدوي
        </button>
      </div>

      <div className="date-form">
        {/* تاريخ الميلاد */}
        <div className="box">
          <h3>تاريخ ميلادك</h3>
          <div className="inputs">
            <select
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              className="date-input"
            >
              <option value="">Day</option>
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <select
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              className="date-input"
            >
              <option value="">Month</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <select
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="date-input"
            >
              <option value="">Year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {!useToday && (
          <div className="box">
            <h3>تاريخ الحساب</h3>
            <div className="inputs">
              <select
                value={todayDay}
                onChange={(e) => setTodayDay(e.target.value)}
                className="date-input"
              >
                <option value="">Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <select
                value={todayMonth}
                onChange={(e) => setTodayMonth(e.target.value)}
                className="date-input"
              >
                <option value="">Month</option>
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              <select
                value={todayYear}
                onChange={(e) => setTodayYear(e.target.value)}
                className="date-input"
              >
                <option value="">Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* زر الحساب */}
        <button
          style={{
            backgroundColor: "#e0f7fa",
            padding: "20px",
            borderRadius: "12px",
            color: "#00796b",
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            marginTop: "20px",
          }}
          onClick={handleAge}
        >
          احسب عمرك
        </button>

        {/* النتيجة */}
        <p
          style={{
            marginTop: "20px",
            backgroundColor: "#e0f7fa",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            color: "#00796b",
            fontSize: "20px",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "0.3s ease-in-out",
            maxWidth: "400px",
            marginInline: "auto",
          }}
        >
          {result}
        </p>
      </div>
    </>
  );
}
