import NavBar from "@/app/components/navBar";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Blog Id:{params.id}</h1>
    </div>
  );
}
