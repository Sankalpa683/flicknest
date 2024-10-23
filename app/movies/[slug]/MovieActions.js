'use client';

import { Button } from 'antd';
import { LikeOutlined, ShareAltOutlined, BookOutlined } from '@ant-design/icons';

export default function MovieActions() {
  return (
    <div className="flex space-x-2">
      <Button type="primary" icon={<LikeOutlined />}>Like</Button>
      <Button icon={<ShareAltOutlined />}>Share</Button>
      <Button icon={<BookOutlined />}>Bookmark</Button>
    </div>
  );
}
