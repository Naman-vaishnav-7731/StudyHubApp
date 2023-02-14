const Sucessfullycard = (title) => {
  return (
    <div class="flex justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-[green] max-w-sm">
        <h1 class="text-lg mb-4 text-[white]">Sucessfully {title.desc} ✔✔</h1>
      </div>
    </div>
  );
};

export default Sucessfullycard;
