"use client";

import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Space } from "../Space";
import { DropdownProps } from "./types";
import {
  ChildrenWrapper,
  DropdownListWrapper,
  DropdownWrapper,
} from "./styled";

const dropdownWidth = 271;
const dropDownLayoutWrapper = "dropdown-layout-wrapper";

export const Dropdown: FC<DropdownProps> = ({
  children,
  position,
  actions,
}) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!document.getElementById(dropDownLayoutWrapper)) {
      const wrapper = document.createElement("div");
      wrapper.id = dropDownLayoutWrapper;
      document.getElementById("root")?.appendChild(wrapper);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        listRef.current &&
        !listRef.current.contains(e.target as Node) &&
        !childrenRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleClickChildren = () => {
    const rect = childrenRef.current?.getBoundingClientRect();
    if (rect) {
      let offset = dropdownWidth / 2;
      switch (position) {
        case "right":
          offset = 0;
          break;
        case "left":
          offset = dropdownWidth - rect.width;
          break;
      }

      setCoordinates({
        top: rect.top + window.pageYOffset + rect.height + 8,
        left: rect.left + window.pageXOffset - offset,
      });
    }

    setIsOpen((prev) => !prev);
  };

  const dropdownNode = isOpen
    ? createPortal(
        <DropdownListWrapper
          data-testid="dropdown-list"
          ref={listRef}
          style={{
            top: `${coordinates.top}px`,
            left: `${coordinates.left}px`,
          }}
        >
          {actions}
        </DropdownListWrapper>,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.getElementById(dropDownLayoutWrapper)!,
      )
    : null;

  return (
    <DropdownWrapper data-testid="dropdown-wrapper">
      <Space $direction="vertical" $size={8}>
        <ChildrenWrapper onClick={handleClickChildren} ref={childrenRef}>
          {children}
        </ChildrenWrapper>
      </Space>
      {dropdownNode}
    </DropdownWrapper>
  );
};
