import React from 'react';
import Note from './Note';

export default function StickyNote() {
    return (
        <ul>
            <Note title="Title #1" content="Text Content #1" />
            <Note title="Title #2" content="Text Content #2" />
            <Note title="Title #3" content="Text Content #3" />
            <Note title="Title #4" content="Text Content #4" />
            <Note title="Title #5" content="Text Content #5" />
            <Note title="Title #6" content="Text Content #6" />
        </ul>
    );
}