import React from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  const { nF } = router.query;
  return <div>404 Not Found</div>;
}
