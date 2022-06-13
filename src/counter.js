//1. kita menampilkan value dari counter kita satu per satu
//2. menambah tombol + dan -
//3. buat function plus untuk satu satu
//4. buat function minus untuk satu satu
//5. menambah tombol reset value

function Counter({ value, id, onIncrement, onDecrement }) {
  return (
    <>
      <br />
      <button
        onClick={() => {
          onDecrement(id);
        }}
      >
        -
      </button>
      <span>{value}</span>
      <button
        onClick={() => {
          onIncrement(id);
        }}
      >
        +
      </button>
    </>
  );
}

export default Counter;
