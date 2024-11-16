import { Button, Card, Badge } from "antd";
import { ShareAltOutlined, HomeOutlined } from "@ant-design/icons";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Script from 'next/script';
import Link from "next/link";

export const metadata = {
    title: "Watch Mike Tyson vs Jake Paul Full Fight 2024: Winner, Live Stream, Netflix & More | Bolly Cinema Hub",
    description: "Watch the highly anticipated Tyson vs Jake Paul Full Fight 2024 live. Catch everything about the Mike Tyson vs Jake Paul full fight 2024, including who won, live streaming options, replay on Netflix, results, and time in Nepal. Get ready for the ultimate boxing showdown!. Free streaming, HD quality on Bolly Cinema Hub!",
    keywords: [
        "who won Mike or Jake",
        "Jake vs Mike Tyson",
        "Netflix",
        "Mike Tyson vs Jake Paul who won",
        "Tyson vs Jake Paul",
        "Mike Tyson vs Jake Paul live",
        "Mike Tyson and Jake Paul fight",
        "Mike vs Jake who won",
        "Mike Tyson vs Jake Paul live stream",
        "Jake Paul vs Mike Tyson live",
        "Mike vs Jake live",
        "Jake Paul vs Mike Tyson who won",
        "Jake Paul age",
        "Paul vs Tyson",
        "Mike Tyson vs Jake Paul full fight",
        "Mike Tyson vs Jake Paul Netflix",
        "who won Mike Tyson vs Jake Paul",
        "Mike Tyson vs Jake Paul full fight 2024 who won",
        "Mike Tyson age",
        "Tyson vs Paul",
        "Mike vs Jake Paul",
        "Jake vs Mike Tyson live",
        "Mike vs Jake live free",
        "boxing live",
        "who won Mike Tyson and Jake Paul",
        "Mike Tyson vs Jake Paul Nepal time",
        "Mike Tyson vs Jake Paul date, time",
        "who won Jake Paul vs Mike Tyson",
        "Jake Paul and Mike Tyson fight",
        "Mike vs Jake time",
        "Mike Tyson vs Jake Paul Netflix time",
        "Mike Tyson vs Jake Paul winner",
        "Mike Tyson vs Jake Paul results",
        "Jake vs Mike Tyson who won",
        "Jake vs Mike Tyson time",
        "Jake Paul vs Mike Tyson live stream free",
        "Mike Tyson vs Jake Paul Netflix free",
        "Jake Paul vs Mike Tyson date"
    ].join(", "),
    openGraph: {
        title: "Watch Mike Tyson vs Jake Paul Full Fight 2024: Winner, Live Stream, Netflix & More | Bolly Cinema Hub",
        description: "Watch the highly anticipated Tyson vs Jake Paul Full Fight 2024 live. Catch everything about the Mike Tyson vs Jake Paul full fight 2024, including who won, live streaming options, replay on Netflix, results, and time in Nepal. Get ready for the ultimate boxing showdown!. Free streaming, HD quality on Bolly Cinema Hub!",
        keywords: [
            "who won Mike or Jake",
            "Jake vs Mike Tyson",
            "Netflix",
            "Mike Tyson vs Jake Paul who won",
            "Tyson vs Jake Paul",
            "Mike Tyson vs Jake Paul live",
            "Mike Tyson and Jake Paul fight",
            "Mike vs Jake who won",
            "Mike Tyson vs Jake Paul live stream",
            "Jake Paul vs Mike Tyson live",
            "Mike vs Jake live",
            "Jake Paul vs Mike Tyson who won",
            "Jake Paul age",
            "Paul vs Tyson",
            "Mike Tyson vs Jake Paul full fight",
            "Mike Tyson vs Jake Paul Netflix",
            "who won Mike Tyson vs Jake Paul",
            "Mike Tyson vs Jake Paul full fight 2024 who won",
            "Mike Tyson age",
            "Tyson vs Paul",
            "Mike vs Jake Paul",
            "Jake vs Mike Tyson live",
            "Mike vs Jake live free",
            "boxing live",
            "who won Mike Tyson and Jake Paul",
            "Mike Tyson vs Jake Paul Nepal time",
            "Mike Tyson vs Jake Paul date, time",
            "who won Jake Paul vs Mike Tyson",
            "Jake Paul and Mike Tyson fight",
            "Mike vs Jake time",
            "Mike Tyson vs Jake Paul Netflix time",
            "Mike Tyson vs Jake Paul winner",
            "Mike Tyson vs Jake Paul results",
            "Jake vs Mike Tyson who won",
            "Jake vs Mike Tyson time",
            "Jake Paul vs Mike Tyson live stream free",
            "Mike Tyson vs Jake Paul Netflix free",
            "Jake Paul vs Mike Tyson date"
        ].join(", "),
        url: "https://www.bollycinemahub.in/boxing/tyson-vs-jake-paul-full-fight-2024-live-stream-winner-results",
        images: [
            {
                url: "https://www.bollycinemahub.in/paultyson.png",
                alt: "Tyson vs Jake Paul Full Fight 2024 Poster",
            },
        ],
        type: "video.movie",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tyson vs Jake Paul Full Fight 2024",
        description: "Watch Tyson vs Jake Paul Full Fight 2024 live, get winner results and stream it in HD for free on Bolly Cinema Hub!",
        images: ["https://www.bollycinemahub.in/paultyson.png"],
    },
};

// JSON-LD structured data for SEO
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Tyson vs Jake Paul Full Fight 2024",
    description: "Live streaming, winner updates, and results for the Tyson vs Jake Paul boxing match 2024. Watch it for free on Bolly Cinema Hub.",
    startDate: "2024-10-15T20:00:00+00:00",
    endDate: "2024-10-15T23:00:00+00:00",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventDetails: {
        eventType: "Boxing Match",
        startDate: "2024-11-16T16:37:13+05:45",
        location: {
            name: "T-Mobile Arena, Las Vegas",
            address: {
                "streetAddress": "3780 Las Vegas Blvd S",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89158",
                "addressCountry": "US"
            }
        },
        participants: [
            {
                "name": "Mike Tyson",
                "role": "Boxer",
                "profileUrl": "https://en.wikipedia.org/wiki/Mike_Tyson"
            },
            {
                "name": "Jake Paul",
                "role": "Boxer",
                "profileUrl": "https://en.wikipedia.org/wiki/Jake_Paul"
            }
        ]
    },
    location: {
        "@type": "Place",
        name: "Las Vegas Arena",
        address: "Las Vegas, NV, USA",
    },
    performer: [
        {
            "@type": "Person",
            name: "Mike Tyson",
            jobTitle: "Boxer",
            sameAs: "https://en.wikipedia.org/wiki/Mike_Tyson",
        },
        {
            "@type": "Person",
            name: "Jake Paul",
            jobTitle: "Boxer",
            sameAs: "https://en.wikipedia.org/wiki/Jake_Paul",
        },
    ],
    video: {
        "@type": "VideoObject",
        name: "Tyson vs Jake Paul Full Fight 2024",
        description: "Watch Tyson vs Jake Paul Full Fight 2024 live, including winner and results.",
        thumbnailUrl: "https://www.bollycinemahub.in/paultyson.png",
        uploadDate: "2024-10-15",
        embedUrl: "https://www.youtube.com/watch?v=xeyxOmAONM4",
    },
    potentialAction: {
        "@type": "WatchAction",
        target: [
            {
                "@type": "EntryPoint",
                urlTemplate: "https://www.bollycinemahub.in/boxing/tyson-vs-jake-paul-full-fight-2024-live-stream-winner-results",
            },
        ],
    },
    relatedEvent: {
        "@type": "Event",
        name: "Tyson vs Jake Paul Pre-Fight Press Conference",
        startDate: "2024-11-14T12:00:00+00:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
            "@type": "Place",
            name: "T-Mobile Arena, Las Vegas",
            address: {
                "@type": "PostalAddress",
                streetAddress: "3780 Las Vegas Blvd S",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89158",
                addressCountry: "US"
            }
        },
        description: "Join the Tyson vs Jake Paul pre-fight press conference where both boxers will discuss their strategies ahead of the big match.",
        performer: [
            {
                "@type": "Person",
                "name": "Mike Tyson",
                "role": "Boxer",
                "sameAs": "https://en.wikipedia.org/wiki/Mike_Tyson"
            },
            {
                "@type": "Person",
                "name": "Jake Paul",
                "role": "Boxer",
                "sameAs": "https://en.wikipedia.org/wiki/Jake_Paul"
            }
        ],
        organizer: {
            "@type": "Organization",
            "name": "Boxing Promotions",
            "url": "https://www.bollycinemahub.in/"
        },
    }
};

export default function TysonVsJakePage() {
    return (
        <>
            <Navbar active="boxing" />
            <div className="container mx-auto p-4 space-y-8 bg-white">
                <h1 className="text-3xl font-bold text-center">Watch Mike Tyson vs Jake Paul Full Fight 2024</h1>
                <div className="flex justify-center mb-6">
                    <iframe
                        src="https://www.youtube.com/embed/xeyxOmAONM4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-[500px] lg:w-3/4 rounded-lg"
                        title="Watch Mike Tyson vs Jake Paul Full Fight 2024"
                    ></iframe>
                </div>

                <div className="text-center space-y-4">
                    <p className="text-lg">
                        Don't miss out on the action as <strong>Mike Tyson</strong> faces off against <strong>Jake Paul</strong> in this epic boxing match. Stream the fight live and catch all the latest updates!
                    </p>
                    <div className="space-y-2">
                        <Button type="primary" icon={<ShareAltOutlined />}>Share</Button>
                    </div>
                </div>
            </div>
            <Footer />
            {/* JSON-LD structured data */}
            <Script
                type="application/ld+json"
                id="json-ld"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
