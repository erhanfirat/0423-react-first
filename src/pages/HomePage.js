import Student from "../components/Student";

const HomePage = () => {
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <hr />
      <p>Örnek paragraf 1</p>

      <p>Student Component</p>
      <Student name={"Öğrenci Ali"} />
    </div>
  );
};

export default HomePage;
