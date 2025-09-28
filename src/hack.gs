# bypass fencing

proc goto_pos pos pos {
    position $pos.x, $pos.y, $pos.s, $pos.d;
}

proc change_xy dx, dy {
    # Even with tw no fencing enabled, this is not equivalent to change x by dx; change y by dy;
    # because it causes differences when the pen is down
    pos_hack x_position() + $dx, y_position() + $dy;
}

proc size_hack size {
    local old_costume = costume_number();
    
    switch_costume "size" & ($size < 100) + ($size < 1);
    set_size $size;

    switch_costume old_costume;
}

proc pos_size_hack x, y, size {
    local old_costume = costume_number();
    
    switch_costume "fenceless.gs//size0";
    set_size "Infinity";

    goto $x, $y;

    switch_costume "fenceless.gs//size" & ($size < 100) + ($size < 1);
    set_size $size;

    switch_costume old_costume;
}

proc pos_hack x, y {
    # Just call the other function. It's easier and we'd have to store the size anyway
    pos_size_hack $x, $y, size();
}

proc position x, y, size, dir {
    # Set x, y, size and dir all in one procedure
    pos_size_hack $x, $y, $size;
    point_in_direction $dir;
}

proc hack_steps steps {
    change_xy $steps * sin(direction()),
              $steps * cos(direction());
}

%define RESET_POS position 0, 0, 100, 90;

# You can find the stretch script 'goto_pos_stretch' in the cosfx library (hopefully exists)