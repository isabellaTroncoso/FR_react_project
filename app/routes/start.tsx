import type { Route } from "./+types/home";
import { Start } from "../about/start";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Start" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function StartPage() {
  return <Start />;
}