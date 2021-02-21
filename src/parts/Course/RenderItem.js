import React from 'react';

import Link from 'next/link';
import IconPlay from '../../../public/images/btn_play.svg';

export default function RenderItem({ item }) {
  // console.log(item);
  return (
    <div className="w-full md:w-1/4 px-4 my-3">
      <div className="item relative">
        <figure className="item-image">
          <IconPlay></IconPlay>
          <img
            src={item?.thumbnail ?? ''}
            alt={item?.name ?? 'Image Courses'}
          />
        </figure>
        <div className="item-meta">
          <h4 className="text-lg text-gray-900 mt-1">
            {item?.name ?? 'Course Name'}
          </h4>
          <h5 className="text-sm text-gray-500 mt-1">
            {item?.level ?? 'Course Level'}
          </h5>
        </div>
        <Link href="/courses/[id]" as={`/courses/${item.id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
