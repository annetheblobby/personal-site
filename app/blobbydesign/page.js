"use client";
import Link from "next/link";
import Image from "next/image";

export default function Blobbydesign() {
    return (
        <div className="relative">
            <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[1700px] max-md:mb-10">
                <div className="flex flex-col items-start max-w-full w-[895px]">
                    <div className="absolute left-[20%] top-[200px] max-md:relative max-md:left-0 max-md:w-full w-[300px] drop-animation">
                        <Link href="/minimalisticart/art1">
                            <Image
                                src="/images/art1.png"
                                width={300}
                                height={300}
                                className="hover:scale-110 transition-transform duration-100"
                                alt="Art 1"
                            />
                        </Link>
                    </div>
                    <div className="absolute left-[50%] top-[400px] max-md:relative max-md:left-0 max-md:w-full w-[400px] drop-animation">
                        <Link href="/minimalisticart/art2">
                            <Image
                                src="/images/art2.png"
                                width={400}
                                height={400}
                                className="hover:scale-110 transition-transform duration-100"
                                alt="Art 2"
                            />
                        </Link>
                    </div>
                    <div className="absolute left-[10%] top-[600px] max-md:relative max-md:left-0 max-md:w-full w-[250px] drop-animation">
                        <Link href="/minimalisticart/art3">
                            <Image
                                src="/images/art3.png"
                                width={250}
                                height={250}
                                className="hover:scale-110 transition-transform duration-100"
                                alt="Art 3"
                            />
                        </Link>
                    </div>
                    <div className="absolute left-[70%] top-[800px] max-md:relative max-md:left-0 max-md:w-full w-[350px] drop-animation">
                        <Link href="/minimalisticart/art4">
                            <Image
                                src="/images/art4.png"
                                width={350}
                                height={350}
                                className="hover:scale-110 transition-transform duration-100"
                                alt="Art 4"
                            />
                        </Link>
                    </div>
                    <div className="absolute left-[30%] top-[1000px] max-md:relative max-md:left-0 max-md:w-full w-[300px] drop-animation">
                        <Link href="/minimalisticart/art5">
                            <Image
                                src="/images/art5.png"
                                width={300}
                                height={300}
                                className="hover:scale-110 transition-transform duration-100"
                                alt="Art 5"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
