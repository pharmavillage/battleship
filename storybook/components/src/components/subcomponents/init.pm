#!/usr/bin/perl
use strict;
use warnings;
use JSON;
use File::Slurp;
use File::Spec;

# Function to perform find and replace in a file
sub find_and_replace {
    my ($input_file, $output_file, $find, $replace) = @_;

    open my $in, '<', $input_file or die "Could not open '$input_file' for reading: $!";
    open my $out, '>', $output_file or die "Could not open '$output_file' for writing: $!";

    while (my $line = <$in>) {
        $line =~ s/\Q$find\E/$replace/g;
        print $out $line;
    }

    close $in;
    close $out;
}

# Function to remove slashes and format with underscores and pipes
sub removeslashesandformatwithunderscoresandpipes {
    my ($location) = @_;
    $location =~ s|/|_|g;
    return $location;
}

# Read components from a JSON file if it exists
my $components_file = 'components.json';
my @components;
if (-e $components_file) {
    my $json_text = read_file($components_file);
    @components = @{ decode_json($json_text) } if $json_text ne '';
}

# Define default values
my $default_file1 = 'default_template1.txt';
my $default_file2 = 'default_template2.txt';
my $default_save_location = '.';
my $default_suffix = '_processed';
my $default_word_to_replace = 'default_word';
my $default_replacement_word = 'default_replacement';

# Subroutine to prompt for user input with a default value
sub prompt {
    my ($message, $default) = @_;
    print "$message [$default]: ";
    my $input = <STDIN>;
    chomp($input);
    return $input eq '' ? $default : $input;
}

# Process each component from the JSON file or prompt the user if JSON is empty
if (@components) {
    foreach my $component (@components) {
        my $file1            = $component->{'file1'}            || $default_file1;
        my $file2            = $component->{'file2'}            || $default_file2;
        my $word_to_replace  = $component->{'word_to_replace'}  || $default_word_to_replace;
        my $replacement_word = $component->{'replacement_word'} || $default_replacement_word;
        my $alias            = $component->{'alias'}            || 'file';
        my $new_file1_name   = $component->{'new_file1_name'}   || "$alias\_1$default_suffix.txt";
        my $new_file2_name   = $component->{'new_file2_name'}   || "$alias\_2$default_suffix.txt";
        my $save_location    = $component->{'save_location'}    || $default_save_location;

        # Define the new file paths
        my $new_file1_path = File::Spec->catfile($save_location, $new_file1_name);
        my $new_file2_path = File::Spec->catfile($save_location, $new_file2_name);

        # Skip if the files already exist
        if (-e $new_file1_path && -e $new_file2_path) {
            print "Files '$new_file1_path' and '$new_file2_path' already exist. Skipping...\n";
            next;
        }

        # Process each file for the first find and replace
        find_and_replace($file1, $new_file1_path, $word_to_replace, $replacement_word);
        find_and_replace($file2, $new_file2_path, $word_to_replace, $replacement_word);

        print "Files processed and saved as '$new_file1_path' and '$new_file2_path'.\n";

        # Perform second find and replace operation
        my $second_find = 'title: "Component\| \|Avatar/template",';
        my $second_replace = 'title: "@' . removeslashesandformatwithunderscoresandpipes($save_location) . '\| \|v1/' . $replacement_word . '",';
        
        my $temp_file = "$new_file1_path.temp";
        find_and_replace($new_file1_path, $temp_file, $second_find, $second_replace);
        rename($temp_file, $new_file1_path);

        $temp_file = "$new_file2_path.temp";
        find_and_replace($new_file2_path, $temp_file, $second_find, $second_replace);
        rename($temp_file, $new_file2_path);

        print "Second find and replace completed for '$new_file1_path' and '$new_file2_path'.\n";
    }
} else {
    print "No components found in 'components.json'.\n";

    my $file1            = prompt("Enter the path to the first file", $default_file1);
    my $file2            = prompt("Enter the path to the second file", $default_file2);
    my $word_to_replace  = prompt("Enter the word to replace", $default_word_to_replace);
    my $replacement_word = prompt("Enter the replacement word", $default_replacement_word);
    my $alias            = prompt("Enter an alias for the new files", 'file');
    my $save_location    = prompt("Enter the directory to save the new files", $default_save_location);

    # Define the new file names
    my $new_file1_name = "$alias\_1$default_suffix.txt";
    my $new_file2_name = "$alias\_2$default_suffix.txt";

    # Define the new file paths
    my $new_file1_path = File::Spec->catfile($save_location, $new_file1_name);
    my $new_file2_path = File::Spec->catfile($save_location, $new_file2_name);

    # Process each file for the first find and replace
    find_and_replace($file1, $new_file1_path, $word_to_replace, $replacement_word);
    find_and_replace($file2, $new_file2_path, $word_to_replace, $replacement_word);

    print "Files processed and saved as '$new_file1_path' and '$new_file2_path'.\n";

    # Perform second find and replace operation
    my $second_find = 'title: "Component\| \|Avatar/template",';
    my $second_replace = 'title: "@' . removeslashesandformatwithunderscoresandpipes($save_location) . '\| \|v1/' . $replacement_word . '",';
    
    my $temp_file = "$new_file1_path.temp";
    find_and_replace($new_file1_path, $temp_file, $second_find, $second_replace);
    rename($temp_file, $new_file1_path);

    $temp_file = "$new_file2_path.temp";
    find_and_replace($new_file2_path, $temp_file, $second_find, $second_replace);
    rename($temp_file, $new_file2_path);

    print "Second find and replace completed for '$new_file1_path' and '$new_file2_path'.\n";
}
