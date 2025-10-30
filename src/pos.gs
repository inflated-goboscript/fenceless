struct pos {
    # Struct storing a sprite position - x, y, size & dir
    x, y, # pos
    s, # size
    d  # direction
}
%define pos(_x,_y,_s,_d) (pos{x:_x,y:_y,s:_s,d:_d})

func pos_from_node(Node p, s, d) pos {
    return pos{
        x: $p.x, y: $p.y, s:$s, d: $d
    };
}

func pos_from_circle(Circle c, d) pos {
    return pos{
        x: $c.x, y: $c.y, s: $c.r, d: $d
    };
}

func my_pos() pos {
    return pos{
        x: x_position(),
        y: y_position(),
        s: size(),
        d: direction()
    };
}

func mouse_pos() pos {
    return pos{
        x: mouse_x(),
        y: mouse_y(),
        s: 100,
        d: 90
    };
}