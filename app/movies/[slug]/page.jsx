"use client"

import { Button, Card, Avatar, Badge } from "antd";
import { LikeOutlined, BookOutlined, ShareAltOutlined, StarFilled } from "@ant-design/icons";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function MoviePage() {
  return (
    <>
      <Navbar active='movies' />
      <div className="container mx-auto p-4 space-y-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
          <div className="lg:col-span-2 bg-white">
            <div className="aspect-video bg-white bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.dailymotion.com/video/x8fx20i"
                // src="https://mcloud.vvid30c.site/watch/?v41#aTFTR1hNUXBxTzV0cWRPUXFoSnpkN1BGdUd6TTlSMU5XeUMwRkdXTnRuY0xLRnRQMjhkK2hXS05XUmFkQ2pzWWpJdmk2ZnVMVHRrPQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="my-5 bg-white space-y-2 rounded-lg">
              <h1 className="text-3xl font-bold">Dilwale Dulhania Le Jayenge (1995)</h1>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>1995</span>
                <span>•</span>
                <span>Hindi</span>
                <span>•</span>
                <span>181 min</span>
                <span>•</span>
                <div className="flex items-center">
                  <StarFilled style={{ color: "#fadb14" }} />
                  <span className="ml-1">8.8/10</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                When Raj (Shah Rukh Khan) and Simran (Kajol) first met on an inter-rail holiday in Europe, it wasn't exactly Love at first sight but when Simran is taken back to India for an arranged marriage, things change. Encouraged by his father Dharamvir (Anupam Kher), Raj decides to fly down from London to not just win his Bride but her whole family and the blessings of her father Baldev Singh (Amrish Puri). Written by
                Official Source
              </p>
              <div className="flex space-x-2 py-3">
                <Badge color="blue">Sci-Fi</Badge>
                <span>•</span>
                <Badge color="green">Action</Badge>
                <span>•</span>
                <Badge color="volcano">Adventure</Badge>
              </div>
            </div>
            <div className="flex bg-white space-x-2">
              <Button type="primary" icon={<LikeOutlined />}>Like</Button>
              <Button icon={<ShareAltOutlined />}>Share</Button>
              <Button icon={<BookOutlined />}>Bookmark</Button>
            </div>
          </div>
          <div className="space-y-6 bg-white">
            <Card title="Cast">
              {["Shah Rukh Khan", "Amrish Puri", "Kajol Devgan", "Jonny Lever"].map((actor) => (
                <div key={actor} className="flex items-center space-x-4 mb-4">
                  <div>
                    <p className="font-medium">{actor}</p>
                    <p className="text-sm text-muted-foreground">Actor</p>
                  </div>
                </div>
              ))}
            </Card>
            <Card title="Director">
              <div className="flex bg-white items-center space-x-4">
                <div>
                  <p className="font-medium">Aditya Chopra</p>
                  <p className="text-sm text-muted-foreground">Director</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="bg-white">
          <h2 className="text-2xl font-semibold mb-4">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Interstellar", "The Dark Knight", "Memento", "The Prestige"].map((movie) => (
              <Card key={movie} hoverable>
                <div className="aspect-video bg-muted rounded-md mb-2"></div>
                <h3 className="font-medium">{movie}</h3>
                <p className="text-sm text-muted-foreground">Christopher Nolan</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <div className="space-y-4">
            {[
              { user: "Alice", comment: "This movie blew my mind! The concept is so original." },
              { user: "Bob", comment: "I've watched it 3 times and I still find new details every time." },
              { user: "Charlie", comment: "The visual effects are stunning. Definitely deserved the Oscar." },
            ].map((comment, index) => (
              <Card key={index}>
                <div className="flex items-center space-x-4">
                  <Avatar>{comment.user[0]}</Avatar>
                  <div>
                    <p className="font-medium">{comment.user}</p>
                    <p className="text-sm text-muted-foreground">{comment.comment}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
