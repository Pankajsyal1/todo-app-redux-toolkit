const TheFooter = () => {
  return  <footer className="w-full bg-black py-6">
  <div className="container mx-auto text-center text-white">
    <p>&copy; {new Date().getFullYear()} Redux Documentation. All rights reserved.</p>
  </div>
</footer>;
};

export default TheFooter;
