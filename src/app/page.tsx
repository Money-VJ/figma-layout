import Image from "next/image"; // Импорт компонента Image из Next.js

export default function Home() {
  return (
    <main style={{ backgroundColor: "#1E1E1E", color: "white", minHeight: "100vh", padding: "16px" }}>
      {/* Контейнер для центрирования контента */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Хедер: Карточка с изображением */}
        <header style={{ marginBottom: "40px", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#2D2D2D",
              padding: "12px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Image
              src="/images/новости недели.png" // Путь к изображению
              alt="Главные новости недели"
              width={1600}
              height={400} // Делаем изображение тонким и длинным
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
        </header>

        {/* Разделы: Статьи, Интервью, Альбомы, Треки */}
        <section style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ textAlign: "center", width: "23%" }}>
              <Image
                src="/images/статьи.png"
                alt="Статьи"
                width={100}
                height={100}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "8px" }}>Статьи</h3>
              <p style={{ color: "#aaa" }}>Последние новости и интересные статьи</p>
            </div>
            <div style={{ textAlign: "center", width: "23%" }}>
              <Image
                src="/images/интервью.png"
                alt="Интервью"
                width={100}
                height={100}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "8px" }}>Интервью</h3>
              <p style={{ color: "#aaa" }}>Топ интервью этой недели</p>
            </div>
            <div style={{ textAlign: "center", width: "23%" }}>
              <Image
                src="/images/альбомы.png"
                alt="Альбомы"
                width={100}
                height={100}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "8px" }}>Альбомы</h3>
              <p style={{ color: "#aaa" }}>Новые альбомы и релизы</p>
            </div>
            <div style={{ textAlign: "center", width: "23%" }}>
              <Image
                src="/images/треки.png"
                alt="Треки"
                width={100}
                height={100}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "8px" }}>Треки</h3>
              <p style={{ color: "#aaa" }}>Популярные треки недели</p>
            </div>
          </div>
        </section>

        {/* Дополнительная карточка с изображением */}
        <section style={{ marginBottom: "40px", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#2D2D2D",
              padding: "12px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              marginTop: "40px",
            }}
          >
            <Image
              src="/images/Топ недели.png" // Путь к дополнительному изображению
              alt="Дополнительная карточка"
              width={1600}
              height={400} // Делаем изображение тонким и длинным
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
        </section>

        {/* Сетка 3x3 для 6 карточек с изображениями */}
        <section style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // 3 колонки
              gap: "16px", // Добавление промежутков между карточками
            }}
          >
            {/* Шесть карточек */}
            {["Картинка1.png", "Картинка2.png", "Картинка3.png", "Картинка4.png", "Картинка5.png", "Картинка6.png"].map((img, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#2D2D2D",
                  padding: "16px",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                }}
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Карточка ${index + 1}`}
                  width={350}
                  height={200}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
                <h3 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "12px", marginBottom: "8px" }}>
                  Карточка {index + 1}
                </h3>
                <p style={{ color: "#aaa" }}>Описание карточки {index + 1}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Сетка карточек новостей */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr", // 3 колонки
            gridTemplateRows: "1fr 1fr", // 2 строки
            gap: "16px",
          }}
        >
          {/* Четыре карточки в сетке 2x2 */}
          {["Блок1.png", "Блок2.png", "Блок3.png", "Блок4.png"].map((img, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#2D2D2D",
                padding: "16px",
                borderRadius: "12px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              }}
            >
              <Image
                src={`/images/${img}`}
                alt={`Новина ${index + 1}`}
                width={160}
                height={90}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <h3 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "12px", marginBottom: "8px" }}>
                Новина {index + 1}
              </h3>
              <p style={{ color: "#aaa" }}>Опис новини номер {index + 1}</p>
            </div>
          ))}

          {/* Пятая карточка */}
          <div
            style={{
              gridColumn: "3", // Третья колонка
              gridRow: "1 / span 2", // Занимает весь правый столбец
              backgroundColor: "#2D2D2D",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
            }}
          >
            <Image
              src={`/images/Блок5.png`}
              alt={`П'ята новина`}
              width={160}
              height={90}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "12px", marginBottom: "8px" }}>П'ята новина</h3>
            <p style={{ color: "#aaa" }}>Це опис п'ятої новини, яка відображається в окремому стовпці.</p>
          </div>
        </div>

        {/* Футер */}
        <footer style={{ marginTop: "40px", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#2D2D2D",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Image
              src="/images/футтер.png"
              alt="Футер"
              width={1600}
              height={675}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "16px", marginBottom: "8px" }}>.</h3>
            <p style={{ color: "#aaa" }}>Це підсумок головних новин тижня</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
