import React from "react";
import { NestedMenuItem } from "./NestedMenuItem";
import { IconMenuItem } from "./IconMenuItem";

/**
 * Create a JSX element with nested elements creating a nested menu.
 * Every menu item should have a uid provided
 */
export function nestedMenuItemsFromObject({ items,navigte, isOpen, handleClose }) {
  return items.map((item) => {
    const { leftIcon, rightIcon, label, items, callback, uid } = item;

    if (items) {
      // Recurse deeper
      return (
        <NestedMenuItem
          key={uid}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          label={label}
          parentMenuOpen={isOpen}
          sx={
            {
            
            color:"#fff",
            backgroundColor: "#2F323A",
            border: '.5px solid grey'
            ,fontFamily: "Lato"
        }}
        >
          {/* Call this function to nest more items */}
          {nestedMenuItemsFromObject({ items,navigte, isOpen, handleClose })}
        </NestedMenuItem>
      );
    } else {
      // No children elements, return MenuItem
      return (
        <IconMenuItem
        
          key={uid}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          label={label}
          onClick={() => {
            handleClose();
            callback(navigte);
          }}
        />
      );
    }
  });
}
